# Video Feedback Tool - Benutzerhandbuch

## 1. Erste Schritte
1. Öffnen Sie die Webseite: `https://ihre-domain.de`
2. Geben Sie eine Video-URL ein:
   - YouTube-Link (z.B. `https://youtu.be/vmo2I5tUH6U`)
   - Direkter Link zu MP4-Dateien
3. Klicken Sie auf "Video laden"

![Screenshot der Oberfläche](https://via.placeholder.com/800x400?text=Video+Feedback+Tool+Oberfläche)

## 2. Hauptfunktionen

### 2.1 Kommentare hinzufügen
1. Während der Wiedergabe an gewünschte Stelle springen
2. Kommentarfeld rechts ausfüllen
3. Auf "Kommentar hinzufügen" klicken
4. Kommentar erscheint:
   - In der Liste rechts
   - Als Marker im Zeitstrahl

### 2.2 Kommentare nutzen
- Klicken Sie auf einen Kommentar um zur Stelle zu springen
- Halten Sie ⇧ Shift für Vorschau-Text
- Ziehen Sie Kommentare zum Umsortieren

### 2.3 Share-Link erstellen
1. Klicken Sie auf den Share-Button 🔗
2. Link wird generiert im Format:
   ``` 
   https://ihre-domain.de/?v=VIDEO_URL&c=BASE64_KOMMENTARE
   ```
3. Link kopieren und teilen

## 3. Tastenkürzel
| Tastenkombination | Aktion                |
|--------------------|-----------------------|
| Leertaste          | Play/Pause            |
| →                  | 10 Sek. vorwärts      |
| ←                  | 10 Sek. zurück        |
| F                  | Vollbildmodus         |
| C                  | Neuer Kommentar       |

## 4. Häufige Fragen
**Q: Warum wird mein YouTube-Video nicht geladen?**  
A: Stellen Sie sicher dass:
- Die Seite über HTTPS geladen wird
- Keine Browser-Erweiterungen blockiert werden
- Der Link das Format `youtube.com/watch?v=...` hat

**Q: Wo werden meine Kommentare gespeichert?**  
A: Kommentare werden:
- Lokal im Browser gespeichert (LocalStorage)
- Im Share-Link verschlüsselt
- Nicht auf unseren Servern gespeichert

## 5. Support
Bei Problemen kontaktieren Sie:
- E-Mail: support@ihre-domain.de
- Telefon: +49 123 456789  
Montag-Freitag 9-18 Uhr

[Zur technischen Dokumentation](DOCUMENTATION.md)