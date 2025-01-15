Guess the Word - Web Application
Kort Beskrivelse
"Guess the Word" er et interaktivt webspill hvor brukere gjetter ord basert på hint og kategorier. Brukere kan spille spillet, få et hint om ordet, og prøve å gjette det riktig. Hvis de gjetter riktig, får de en suksessmelding og muligheten til å spille igjen. Administratormodusen lar brukere legge til, redigere og slette ord i databasen, som brukes i spillet.

Brukte Teknologier
HTML: Strukturering av nettsiden og brukergrensesnittet.
CSS: Design og responsivitet for å sikre en god brukeropplevelse på både desktop og mobil.
JavaScript: Dynamisk funksjonalitet for å håndtere spilllogikk, brukerinteraksjon og kommunikasjon med Firebase.
Firebase: Brukt til lagring av ord, hint og kategorier i Firebase Realtime Database, samt autentisering og administrasjon av data.
Firebase Realtime Database: Brukt for lagring, henting og oppdatering av spillord og tilhørende informasjon i sanntid.

Firebase-integrasjon
Firebase brukes til å lagre og administrere spillordene. Alle ord, hint og kategorier lagres i Firebase Realtime Database, og det er enkelt å hente, oppdatere og slette disse dataene. Firebase SDK brukes for å koble til databasen, og funksjoner som set(), get(), og remove() brukes for å administrere dataene.
Lagring: Nye ord blir lagt til i databasen med tilhørende hint og kategori.
Henting: Når spillet starter, hentes et tilfeldig ord sammen med hint og kategori fra Firebase.
Oppdatering og Sletting: Administratormodusen tillater oppdatering av ord og sleting via Firebase.

Designprinsipper og Responsivitet
Designprinsipper: Applikasjonen bruker et enkelt og intuitivt design for å sikre at spilleren kan fokusere på spillet. Farger og tekst er valgt for å gjøre interaksjonen så enkel og visuelt tiltalende som mulig.

Brukeropplevelse
Brukeropplevelsen er ivaretatt ved å gjøre spillet raskt og enkelt å spille. Her er noen spesifikasjoner:
Brukerfeedback: Spilleren får tilbakemelding i sanntid (riktig eller feil gjetning) og kan spille på nytt umiddelbart etter en riktig gjetning.
Estetisk design: Et rent og enkelt design uten unødvendige elementer gir en behagelig opplevelse. Farger og skrifttyper er valgt for å gjøre spillet lett tilgjengelig.

Poengsystem og Spillmekanikk
poeng system og tid system fikk jeg dessverre ikke tid til å implementere pga tids press.

Utfordringer og Løsninger
Firebase-konfigurasjon: En utfordring var å konfigurere Firebase riktig for å unngå regionfeil i Realtime Database. Dette ble løst ved å oppdatere databaseURL-verdien i Firebase-konfigurasjonen til den riktige URL-en.

Oppsummering
Applikasjonen "Guess the Word" er et fullt fungerende ordspill som lar brukere spille og administrere ord, hint og kategorier i Firebase Realtime Database. Brukeropplevelsen er ivaretatt gjennom et rent design og interaktive elementer, mens Firebase brukes til å lagre og administrere spilldata i sanntid.

Fremtidige Forbedringer
Flere spillmoduser: Muligheten til å legge til forskjellige spillmoduser, som multiplayer eller nivåbaserte utfordringer.
Anbefalinger for spillord: Bruke maskinlæring til å anbefale ord til spilleren basert på tidligere spill.
Brukerprofil og Poengsystem: Implementere en brukerprofil hvor spillere kan se sine totale poeng og statistikk.
