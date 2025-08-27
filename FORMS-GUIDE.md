# Hvordan bruke og lage "Forms"

## `form` taggen

HTML former brukes for å hente bruker input og skaper muligheter for interaktivitet og innsending av data på nettsider. 

Kjerneelementet for å lage former er via Form taggen.

```html
<form>
```

## Strukturering av en Basic `form`
`form` elementet: Dette elementet fungerer som en beholder/ container for alle skjemakontroller. Det krever `action` og `form` attributter.

### `Action`: 
Spesifiserer URL'en hvor daten fra skjemaet blir sent for prossesering


### `Method`:
Definerer HTTP metoden som er brukt for å sende data, typsik sett `get` eller `post`. `Post` er generellt foretrukket for sensitive data eller for større innsendinger.

```html
    <form action="/submit_form.php" method="post">
        <!-- Form elementer går her -->
    </form>
```
## Input elementer:
HTML `input` elementet er en grunnleggende komponent som brukes i skjemaene/formsene for å samle ulike typer brukerinndata. Det er et av de mest allsidige og viktige elementene i HTML for å lage interaktive nettsider.

## Nøkkelegenskaper og bruksområder for `input` element

### Brukerinteraksjon:
Det tilbyr interaktive kontroller for brukere til å skrive in data, gjøre valg, laste opp filer, og utløse handlinger.

### `type attributt`:
Oppførselen og utseendet til et `input` element er bestemmes først og fremst av `type` attributtet. Dette attributtet spesifiserer typen inndatakontroll som skal gjengis. Eksempler inkluderer: 
- `text`
- `password`
- `email`
- `number`