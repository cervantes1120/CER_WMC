# CER_WMC

Übungen und Unterrichtsunterlagen für WMC. Dieses Repository enthält mehrere eigenständige Projekte. Es gibt nur einen Git-Verlauf und eine GitHub-Verbindung für alle Unterordner.

| Ordner | Inhalt | Laufzeit |
| --- | --- | --- |
| `AsyncAwait/` | Bestell-Pipeline mit Fehlerbehandlung | Deno |
| `lambda/` | Filter- und Sortierübungen | Deno |
| `hono/` | HTTP-/REST-Projekt mit Frontend | Deno |
| `drizzle-start/` | Drizzle-Einstieg mit SQLite und libSQL | Node.js / npm |
| `2026-10-14-drizzle-orm/` | Unterrichtsmaterial und Musikdatenbank-Beispiel | Deno |
| `unterlagen/` | Knowledge Check | Markdown |

## In VS Code öffnen

Die Datei `CER_WMC.code-workspace` öffnen. Die Projekte erscheinen als getrennte Ordner mit jeweils passenden Editor-Einstellungen. Für die Deno-Projekte wird die Deno-Erweiterung benötigt.

## Drizzle starten

Im Terminal vom Repository-Hauptordner aus:

```powershell
cd drizzle-start
npm ci
Copy-Item .env.example .env
npx drizzle-kit push
npx tsx src/index.ts
```

Die `.env` nur anlegen, wenn sie noch nicht existiert. Alle Drizzle-Befehle im Unterordner `drizzle-start` ausführen, damit die richtige `.env` und Datenbank verwendet werden. Das Beispiel erstellt John, liest Benutzer aus, ändert Johns Alter und löscht John wieder.

`node_modules`, `.env` und lokale Datenbanken werden nicht hochgeladen. Eine bereits vorhandene lokale Datenbank bleibt lokal nutzbar.

## Deno-Projekte

AsyncAwait: `cd AsyncAwait`, dann `deno run demo.ts`.

Lambda-Übungen: `cd lambda`, dann beispielsweise `deno run filter1.ts`.

Hono: `cd hono`, dann `deno task dev`.

Drizzle-Unterricht: `cd 2026-10-14-drizzle-orm/demoprojekt`; weitere Befehle stehen in der dortigen README.

## Unterschiedliche lokale Versionen

Beim Zusammenführen waren zwei Dateien im alten Ordner `GitHub` gegenüber dem hochgeladenen Stand verändert. Beide Fassungen sind erhalten:

- `AsyncAwait/demo.ts`: bisher auf GitHub gespeicherte Version; `demo_lokal.ts`: lokale Änderungen aus dem alten Ordner `GitHub`.
- `lambda/filter_lambda.ts`: bisher auf GitHub gespeicherte Version; `filter_lambda_lokal.ts`: lokale Änderungen aus dem alten Ordner `GitHub`.
- `lambda/sort_lambda.ts`: bisher nur lokal vorhanden, jetzt übernommen.

Die Varianten wurden unverändert übernommen; ihre fachliche Richtigkeit wurde nicht überarbeitet. Identische Kopien wurden nur einmal aufgenommen.

## Änderungen hochladen

Vom Hauptordner dieses Repositorys aus:

```powershell
git status
git add .
git commit -m "Änderung beschreiben"
git push
```

In Unterordnern weder `git init` noch `git remote add` ausführen. Sie gehören bereits zu diesem Repository.
