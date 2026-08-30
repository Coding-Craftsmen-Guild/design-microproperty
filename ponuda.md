# Ponuda za izradu vebsajta „MegiProperty"

https://www.megiproperty.rs/

**Tehnologije izrade:** ASP .NET, Umbraco CMS, HTML, CSS, JavaScript/jQuery, (Figma ili Tailwind).

**Osnovne karakteristike:** Dinamički website zasnovan na Umbraco CMS sistemu sa responsivnim dizajnom. (Desktop, Tablet, Mobile).

**Deset dinamičkih šablon stranica:** „Početna", „O nama", „Projekti", „Projekat detalji", „Stambena jedinica", „Lokacija", „Novosti", „Novost detalji", „Kontakt" i „Greška 404/500".

Uz njih idu i **dve deljene komponente** koje se uvoze u svaku stranicu: „Zaglavlje sajta" i „Podnožje sajta".

---

## Brend boje

Osnovna paleta (tri boje koje nose identitet):

| Naziv | Hex | Uloga |
|---|---|---|
| **Midnight Navy** | `#1B252F` | Primarna tamna boja — zaglavlje, podnožje, tamne sekcije, naslovi na svetloj podlozi |
| **Champagne Gold** | `#D3B574` | Akcenat — logo, dugmad, aktivna stavka menija, bedževi, linije iznad naslova |
| **White** | `#FFFFFF` | Primarna svetla podloga i tekst na tamnoj podlozi |

Prateća paleta (izvedena iz osnovne, neophodna za čitljivost i hijerarhiju):

| Naziv | Hex | Uloga |
|---|---|---|
| **Deep Gold** | `#8B6F46` | Jedina zlatna koja je čitljiva kao tekst na beloj podlozi — linkovi, nadnaslovi (eyebrow) |
| **Mist** | `#C8D5DC` | Prigušen tekst i okviri na tamnoj podlozi |
| **Sand** | `#F4F1EA` | Topla sekundarna podloga — sekcije ponude, uporedne tabele, povezane novosti |
| **Slate 700** | `#4A5560` | Osnovni tekst na svetloj podlozi |
| **Slate 500** | `#6A7580` | Meta podaci, datumi, sitne oznake |
| **Line Light** | `#E4E9EC` | Okviri kartica i tabela |
| **Hairline** | `#EEF1F3` | Tanki delioci u listama i tabelama |
| **Footer Base** | `#141C24` | Dubina podnožja ispod CTA trake |

Poluprovidni slojevi: `rgba(27,37,47,·)` za gradijente preko hero fotografija (0.93 → 0.2), `rgba(200,213,220,·)` za okvire na tamnoj podlozi, `rgba(211,181,116,·)` za zlatne okvire i naglaske.

### Pravilo kontrasta koje uređuje upotrebu zlatne

| Kombinacija | Odnos | Ocena |
|---|---|---|
| `#D3B574` na `#1B252F` | 7,86:1 | PROLAZI AA |
| `#D3B574` na `#FFFFFF` | 1,98:1 | **PADA — nikada ne koristiti** |
| `#8B6F46` na `#FFFFFF` | 4,71:1 | PROLAZI AA |
| `#FFFFFF` na `#1B252F` | 15,53:1 | PROLAZI AAA |
| `#C8D5DC` na `#1B252F` | 10,36:1 | PROLAZI AA |

**Zlatna je boja za tamnu podlogu.** Na beloj se koristi za ispune, linije, okvire, krupne dekorativne brojeve i ikonice — nikada za tekst. Kada je zlatan tekst potreban na svetloj podlozi, koristi se `#8B6F46`.

---

## Tipografija

| Font | Težine | Upotreba |
|---|---|---|
| **Lora** | 500, 600 | Svi naslovi (`.serif`), dekorativni brojevi, linkovi mobilnog menija. Fallback: `Georgia, serif` |
| **Montserrat** | 400, 500, 600, 700 | Navigacija, telo teksta, dugmad, oznake, polja formulara. Fallback: `"Segoe UI", sans-serif` |

Oba fonta se učitavaju jednim pozivom sa Google Fonts-a sa `display=swap`, i oba pokrivaju kompletnu srpsku latinicu (č, ć, š, ž, đ).

**Skala naslova:**

| Nivo | Desktop | Ispod 900px |
|---|---|---|
| H1 hero početne | 54px / Lora 600 | 32px |
| H1 stranice | 46–48px / Lora 600 | 32px |
| H2 sekcije | 34–36px / Lora 600 | 25px |
| H3 kartice | 21–30px / Lora 600 | — |
| Broj greške (404/500) | 132px / Lora 600 / letter-spacing −0,03em | 96px |
| Nadnaslov (eyebrow) | 11–11,5px / Montserrat 700 / uppercase / letter-spacing 0,16em | — |
| Telo teksta | 13–15,5px / Montserrat 400–500 / line-height 1,7–1,85 | — |

**Logo** (u dizajnu je tačan): vektorski inline SVG, `viewBox 0 0 44 34` — dva zlatna planinska vrha koja uokviruju krov, sa prozorom i mernom letvom. Prikazuje se u tri veličine: 40×30 (zaglavlje početne), 38×29 (deljeno zaglavlje) i 30×23 (podnožje). Sve linije i ispune u `#D3B574`. Uz znak ide tekstualni logotip **MEGIPROPERTY** sa podnaslovom **BEOGRAD** (letter-spacing 0,34em).

---

**Višejezičnost:** SRPSKI, ENGLESKI, RUSKI.

**Accessibility nivo A/AA** — implementacija za ljude sa posebnim potrebama.

**Sve stranice sadrže animacije i tranzicije.** Konkretno: otkrivanje sekcija pri skrolovanju (fade + pomak od 26px), kaskadno kašnjenje kartica u mrežama, brojači koji odbrojavaju do vrednosti, paralaks na hero fotografiji početne, zaglavlje početne koje iz providnog prelazi u puno pri skrolu, hover podizanje kartica i zumiranje fotografija.

**Uključena SEO optimizacija.**

---

## Detalji stranica

### 1) Početna

| Naziv | Opis |
|---|---|
| Zaglavlje (header) | Navigacija, logo, telefon, prekidač jezika, info |
| Podnožje (footer) | Logo, opis, lista stranica, kontakti, društvene mreže |
| Sekcija Banner (hero) | Naslov, opis, dva linka, pozadinska fotografija sa gradijentom i panel sa tri ključne brojke |
| Sekcija Šta radimo | Naslov, opis i tri numerisana bloka procesa (projektovanje, gradnja, direktna prodaja) |
| Sekcija Ponuda | Mreža od četiri kartice stambenih jedinica — fotografija, bedž statusa, kvadratura, specifikacije i CTA koji vodi na stranicu jedinice |
| Sekcija Lokacija | Naslov, opis, četiri brojke sa odbrojavanjem, fotografija sa preklopljenom pločicom i link ka stranici „Lokacija" |
| Sekcija Sledeća faza | Naslov, opis, lista prednosti, fotografija sa bedžom statusa i link ka projektu u pripremi |
| Sekcija Galerija (Instagram) | Naslov, opis, mreža od šest kvadratnih pločica i dugme ka profilu |
| Sekcija Kontakt | Naslov, opis i dva poziva na akciju — telefon i imejl |

### 2) O nama

| Naziv | Opis |
|---|---|
| Zaglavlje (header) | Navigacija, logo, telefon, prekidač jezika, info |
| Podnožje (footer) | Logo, opis, lista stranica, kontakti, društvene mreže |
| Sekcija Banner (hero) | Putanja (breadcrumb) i naslov stranice na tamnoj podlozi |
| Sekcija (media + text) column | Naslov, opis, fotografija, lista brojki i podaci o firmi |
| Sekcija (Info) | Naslov i tri kartice sa principima poslovanja, na tamnoj podlozi |
| Sekcija Kontakt osoba | Kartica sa inicijalima, imenom, funkcijom, radnim vremenom i dva poziva na akciju |

### 3) Projekti / Novosti (liste)

| Naziv | Opis |
|---|---|
| Zaglavlje (header) | Navigacija, logo, telefon, prekidač jezika, info |
| Podnožje (footer) | Logo, opis, lista stranica, kontakti, društvene mreže |
| Sekcija Banner (hero) | Putanja (breadcrumb), naslov i opis stranice na tamnoj podlozi |
| Sekcija Filteri | *(Novosti)* Tabovi po projektu sa brojačem rezultata |
| Sekcija Istaknuto | *(Novosti)* Najnovija objava u uvećanom formatu — fotografija, kategorija, datum, naslov, uvod i link |
| Sekcija Lista | Kartice projekata ili objava sa pratećim detaljima; kartice imaju CTA koji vodi na stranicu detalja. Kartica (naslov, opis, link, slika, bedž statusa) |
| Sekcija Prijava | *(Novosti)* Naslov, opis i forma za prijavu na newsletter |

### 4) Projekat detalji

| Naziv | Opis |
|---|---|
| Zaglavlje (header) | Navigacija, logo, telefon, prekidač jezika, info |
| Podnožje (footer) | Logo, opis, lista stranica, kontakti, društvene mreže |
| Sekcija Banner (hero) | Putanja (breadcrumb), naslov, opis, pozadinska fotografija sa gradijentom i ključne brojke |
| Sekcija Uporedna tabela | Naslov, opis i tabela sa četiri tipa jedinica u koloni, redovima specifikacija i CTA po tipu (horizontalni skrol na užim ekranima) |
| Sekcija (media + text) column | Naslov, opis, fotografija i lista standarda izgradnje |
| Sekcija Faze izgradnje | Naslov i vremenska linija sa četiri faze, statusom i opisom, na tamnoj podlozi |
| Sekcija Novosti | Naslov, link ka listi i tri kartice objava vezanih za projekat |
| Sekcija Rezervacija | *(projekat u pripremi)* Naslov, opis i lepljiva forma — ime, prezime, br. tel, email, opis, dugme |

### 5) Stambena jedinica (detalji)

| Naziv | Opis |
|---|---|
| Zaglavlje (header) | Navigacija, logo, telefon, prekidač jezika, info |
| Podnožje (footer) | Logo, opis, lista stranica, kontakti, društvene mreže |
| Sekcija Naslovna traka | Putanja (breadcrumb), naziv jedinice, kvadratura i cena na tamnoj podlozi |
| Sekcija Galerija i osnove | Tabovi koji smenjuju render i tri osnove (prizemlje, sprat, krovna terasa) |
| Sekcija Specifikacija | Naslov, opis, lista specifikacija i pregled prostorija |
| Sekcija Kontakt | Lepljiva forma upita, prethodno vezana za jedinicu — ime, prezime, br. tel, email, opis, dugme |
| Sekcija Ostale jedinice | Naslov i tri kartice preostalih jedinica u naselju sa statusom i linkom |

### 6) Lokacija

| Naziv | Opis |
|---|---|
| Zaglavlje (header) | Navigacija, logo, telefon, prekidač jezika, info |
| Podnožje (footer) | Logo, opis, lista stranica, kontakti, društvene mreže |
| Sekcija Banner (hero) | Putanja (breadcrumb), naslov, opis i pozadinska fotografija sa gradijentom |
| Interaktivna mapa | Šematska mapa okoline sa označenim tačkama i link na Googlemap ili Openstreet |
| Sekcija Udaljenosti | Lista udaljenosti do okolnih destinacija sa vremenom putovanja |
| Sekcija Sadržaji u okolini | Naslov, opis, mreža kartica sa sadržajima i galerija fotografija prirode |

### 7) Novost detalji

| Naziv | Opis |
|---|---|
| Zaglavlje (header) | Navigacija, logo, telefon, prekidač jezika, info |
| Podnožje (footer) | Logo, opis, lista stranica, kontakti, društvene mreže |
| Sekcija Banner (hero) | Putanja (breadcrumb), kategorija, datum i naslov objave na tamnoj podlozi |
| Sekcija (media + text) column | Naslov, opis, slike, video, liste, citati |
| Sekcija Projekat | Bočna kartica sa fotografijom projekta, opisom i dva poziva na akciju |
| Sekcija Povezane objave | Naslov, link ka listi i tri kartice objava iz istog projekta |

### 8) Kontakt

| Naziv | Opis |
|---|---|
| Zaglavlje (header) | Navigacija, logo, telefon, prekidač jezika, info |
| Podnožje (footer) | Logo, opis, lista stranica, kontakti, društvene mreže |
| Sekcija Banner (hero) | Putanja (breadcrumb) i naslov stranice na tamnoj podlozi |
| Kontakt forma | Ime, prezime, br. tel, email, izbor jedinice, opis, dugme |
| Informacije firme | Telefon, imejl, adresa kancelarije, adresa prodajnog mesta, radno vreme i uslovi obilaska |
| Interaktivna mapa | Obe adrese vode na Googlemap ili Openstreet |
| Društvene mreže | Facebook, Instagram, TikTok |

### 9) Greška 404/500

| Naziv | Opis |
|---|---|
| Zaglavlje (header) | Navigacija, logo, telefon, prekidač jezika, info |
| Podnožje (footer) | Logo, opis, lista stranica, kontakti, društvene mreže |
| Sekcija Banner (hero) | Tamna podloga preko cele stranice sa krupnim brojem greške |
| Centralni tekst | Kratak opis |
| Dugme / Link | Vraćanje na početnu stranicu i poziv telefonom |
| Bočna lista | *(404)* Četiri najtraženije stranice · *(500)* Alternativni kanali kontakta |

### Struktura sajta

```
/                                       Početna
/o-nama/                                O nama
/projekti/                              Projekti (lista)
/projekti/vile-senicani/                Projekat detalji
/projekti/vile-senicani/duplex-1..4/    Stambena jedinica
/projekti/vile-senicani-2/              Projekat detalji (u pripremi)
/lokacija/                              Lokacija
/novosti/                               Novosti (lista)
/novosti/{objava}/                      Novost detalji
/kontakt/                               Kontakt
404 / 500                               Sistemske stranice
```

**Glavna navigacija:** Projekti · Vile Seničani · Lokacija · Novosti · O nama · Kontakt

Srpski slugovi ostaju jer nose lokalne ključne reči. `/en/` i `/ru/` idu kao pune kopije strukture.

---

## Lica angažovana na izradi sajta

- Ivan S. — UI/UX dizajn (Opciono) 700 €
- David M. — Frontend development
- Maksim B. — Backend development

**Infrastruktura:** Hosting i održavanje (660 €)

Dokument *Hosting i odrzavanje 2026 (MegiProperty).pdf*

- Domen (www…) su troškovi kompanije koji ne ulaze u cenu izrade.

**Website:** Procena 216 radnih sati.

**Ukupna cena sajta: (1390 €)**

**Ukupna cena sajta sa hostingom i održavanjem: 2050 €**

Uplata na fakturu (40% avans) i ostatak 60% po završetku projekta.

Plaćanje u dinarskoj protivvrednosti po srednjem kursu NBS-a na dan uplate.

Rok za izradu: do 35 dana od dana prihvatanja ove ponude ili dogovorenog početnog datuma. Svaki dan kašnjenja isplate ili izrade sajta obračunava se nadoknadom od 50e.

Svaka izmena nakon završenog projekta se naplaćuje dodatno po ceni 40e po započetom satu. Isto važi i za rok dostave projekta (Vebsajta).

**Uključeno u cenu:** Izrada website-a. Korisnička podrška u trajanju od mesec dana. Prezentacija, uputstvo i obuka za rukovanje Umbraco CMS sistemom.

Korisnik usluge je upoznat sa uslovima izrade sajta koji su navedeni u ovom dokumentu, sastavni su deo ovog ugovora i svojim potpisom potvrđuje da prihvata iste.

<br>

`__________________________`  `______________________`

Ovlašćeno lice  ·  Korisnik usluge

Beograd, 5. septembar 2026.
