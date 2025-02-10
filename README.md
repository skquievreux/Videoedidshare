# Video Feedback Application

Eine interaktive Webanwendung zur Videowiedergabe mit Kommentarfunktion und Zeitmarken.

## 🚀 Funktionen
- Wiedergabe von YouTube-Videos und lokalen MP4-Dateien
- Kommentarerstellung mit automatischem Zeitstempel
- Visuelle Marker im Video-Progress-Bar
- Lokale Speicherung aller Kommentare (localStorage)
- Share-Link Generation mit eingebetteten Kommentaren
- Responsive Design mit Fluid Player

## 📦 Voraussetzungen
- Moderner Webbrowser mit JavaScript-Unterstützung
- Internetverbindung für YouTube-Videos

## 🛠️ Installation
1. Repository klonen:
   ```bash
   git clone https://github.com/ihr-benutzer/video-feedback-app.git
   ```
2. Alle Dateien auf einem Webserver bereitstellen

## 🎮 Bedienung
### Video laden
1. YouTube-URL oder MP4-Link eingeben
2. Enter drücken oder "Video laden" klicken

### Kommentar hinzufügen
1. Zeitpunkt im Video auswählen
2. Kommentar eingeben
3. "Kommentar hinzufügen" klicken

### Zu Markern springen
- Klick auf Kommentare in der Liste
- Direktes Anklicken der Marker im Progress-Bar

### Share-Link erstellen
- "Share-Link kopieren" Button verwenden
- Link enthält Video-URL und alle Kommentare

## 📚 Verwendete Technologien
- [Video.js](https://videojs.com/) (v7.21.1)
- [Video.js Markers Plugin](https://github.com/spchuang/videojs-markers)
- [Video.js YouTube Plugin](https://github.com/videojs/videojs-youtube)
- localStorage für persistente Datenspeicherung

## 🔍 Besonderheiten
- Automatische URL-Parameter-Verarbeitung:
  - `v`: Video-URL (URL-encoded)
  - `c`: Kommentare (Base64-encoded JSON)
- Mobile-optimierte Oberfläche
- Automatische Zeitformatierung (MM:SS)
- Fehlertolerante Kommentarverarbeitung

## 📄 Lizenz
MIT License