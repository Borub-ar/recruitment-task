## Opis rozwiązania

### Kluczowe dane

Na podstawie analizy pliku `data.json` wybrałem trzy obszary, które najlepiej oddają kondycję sklepu e-commerce:

1. **Przychód (revenue) — kraj i typ klienta**  
   Pola: `country`, `quantity`, `unitPrice`, `customerType`, `category`.  
   Przychód liczony jest jako `quantity × unitPrice` i agregowany według kraju oraz pary (kategoria, typ klienta). To pozwala ocenić, skąd pochodzi dochód i jaki jest udział nowych vs powracających klientów w poszczególnych kategoriach.

2. **Liczba zamówień według urządzenia**  
   Pole: `device`.  
   Zliczam zamówienia w podziale na mobile, desktop i tablet. To ważne dla oceny zachowań zakupowych i priorytetów w rozwoju UI.

3. **Przychód według kraju**  
   Pola: `country`, `quantity`, `unitPrice`.  
   Suma przychodu na kraj daje obraz geograficznego zasięgu sprzedaży i potencjalnych rynków do rozwoju.

### Wizualizacje i uzasadnienie

| Wykres                                    | Typ                       | Uzasadnienie                                                                                                                                                                   |
| ----------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Revenue by country**                    | Wykres słupkowy           | Słupki czytelnie pokazują różnice w przychodzie między krajami. Ułatwiają porównanie i wskazanie liderów.                                                                      |
| **Orders by device**                      | Wykres kołowy (donut)     | Proporcje (mobile/desktop/tablet) są naturalne dla wykresu kołowego. Donut zamiast koła zmniejsza dominację jednej serii i lepiej wyświetla etykiety.                          |
| **Revenue by category and customer type** | Wykres słupkowy grupowany | Dwa słupki obok siebie (new / returning) w każdej kategorii pozwalają szybko porównać wpływ obu segmentów na przychód i zobaczyć, które kategorie przyciągają nowych klientów. |

---

## Technologia i uruchomienie

### Stack

- **React 19** + **TypeScript** + **Vite 7**
- **Recharts** do wizualizacji
- Wersja desktopowa

### Wymagania

- **Node.js** 18+ (zalecane 20+)
- **npm** lub **pnpm**

### Uruchomienie lokalnie

```bash
# Instalacja zależności
npm install

# Serwer deweloperski (http://localhost:5173)
npm run dev
```

Aplikacja będzie dostępna pod adresem **http://localhost:5173** (domyślny port Vite).

**Build produkcyjny:**

```bash
npm run build
npm run preview
```

Podgląd buildu: **http://localhost:4173**.

Projekt uruchamia się standardowo przez Vite — wystarczy `npm install` i `npm run dev`.
