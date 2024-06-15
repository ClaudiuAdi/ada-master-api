Sistemul informatic prezentat este compus din trei actori principali și mai multe scenarii
abstractizate, pe care le-am modelat pentru a reproduce pașii pe care îi va parcurge utilizatorul în
timpul navigării pe aplicație. Clasele reprezintă principalele entități cu care va interacționa
utilizatorul, iar în figura 2.1 sunt exemplificate alături de legăturile existente între ele. În total am
identificat 12 clase principale care interacționează prin legături de tip asociere, compunere și
agregare. 

Principalii actori ai sistemului nostru sunt sportivii, administratorii și platforma de plată care asigură
achitarea abonamentelor. Aceștia interacționează cu interfețe complet diferite și au acces la
funcționalități specifice tipului lor de utilizator.
Pornind de la schema claselor, am identificat cele mai importante și utile entități, pe care le-am
transpus în baza de date. Deși inițial am proiectat programul după o bază de date relațională, ulterior
am decis ca pentru o mai mare flexibilitate și în vederea unei viitoare extinderi să aleg
implementarea cu o bază de date non-relațională. În figura 2.2 am reprezentat fiecare colecție
stocată, împreună cu atributele sale.

Date fiind cerințele funcționale, am ales sa dezvolt o aplicație web-based în detrimentul uneia
mobile sau locale, deoarece acestea asigură o bună funcționare a aplicației atât pe dispozitivele
mobile, cât și pe computer și oferă posibilitatea integrării acesteia în website-ul clubului, fapt ce
facilitează accesul la soluția informatică și îi evidențiază caracterul personalizat.
Aplicația are atât parte de frontend (client), de backend (server), cât și bază de date, iar ca tehnologii
am ales să folosesc:
● Pentru partea de back-end:
○ Node.js
● Pentru partea de front-end:
○ React, HyperText Markup Language (HTML)
○ Cascading Style Sheets (CSS)
○ JavaScript (JS)
● Pentru organizare:
○ GitHub
○ Jira
În ceea ce privește baza de date, am ales NoSQL pentru că oferă un grad ridicat de flexibilitate și
adaptabilitate la cerințe. Am considerat că NoSQL este o formă mai intuitivă și mai potrivită
formatului aplicației mele, întrucât se asemănă mai mult cu programarea orientată pe obiecte.

Arhitectura aplicației (figura 3.1) este una de tip client-server, unde partea de frontend și cea de
backend comunică prin API (,,application programming interface”). Aplicația este una de tip cloud,
iar utilizatorii au acces la aceasta prin intermediul browserelor web. Pentru tehnologiile de bază s-a
încercat să se utilizeze cele mai noi standarde precum Javascript ES7, CSS3 sau HTML5.
o pentru crearea interfețelor grafice s-a utilizat librăria React.js.
o clientul comunică cu serverul prin rute REST API.
o pentru dezvoltarea serverului s-a optat pentru mediul de execuție Node.js
o pentru baza de date s-a ales utilizarea MongoDB.

Odată ce au fost descrise cerințele funcționale, alese tehnologiile și definită arhitectura, proiectul a
fost inițializat. A fost configurat mediul de dezvoltare, asigurându-ne că acesta este potrivit pentru
dezvoltarea tuturor componentelor necesare.
Ulterior, s-a acordat o atenție sporită elementelor de design, fiind definit stilul general al interfețelor
grafice. S-au definit trei tipuri de layout-uri (planuri generale), aferente celor trei tipuri de ecrane
pentru care aplicația va fi adaptată: mobil, tabletă și bineînțeles laptop/desktop. Pentru a ușura
dezvoltarea viitoarelor ecrane, au fost create o serie de componente reutilizabile, precum butoane,
tabele sau formulare.
Pe baza funcționalităților a fost definită schema conceptuală a bazei de date și ulterior implementată
în MongoDB. Utilizând Node.js este creat back-end-ul aplicației. Back-end-ul, denumit și partea de
server, este legat de baza de date. Se definesc rutele cu ajutorul framework-ului Express. O rută
reprezintă o secvență de cod care asociază o metodă de tip HTTP (GET, POST, DELETE etc), un
URL și o funcție care este apelată când se dorește acel tip de acțiune (Mozilla Foundation, 2022).
S-a început cu rutelor specifice procesului de autentificare. Ulterior s-a continuat cu dezvoltarea
rutelor pentru celelalte funcționalități, începând cu cele de bază și ajungând la cele specifice (în
ordinea gradului de specificitate). Metodele implementate sunt GET, POST, PUT și DELETE).
Rutele au fost testate utilizând aplicația Postman (Postman, Inc., 2022).
Odată dezvoltată baza de date și back-end-ul și create rutele pentru toate funcționalitățile s-a trecut
la partea de front-end. A fost urmată aceeași ordine ca și în back-end, pornind de la ecranul de
autentificare. Ecranele au fost dezvoltate, îmbinând atât funcționalitățile cât și design-ul.
După realizarea tuturor ecranelor și legarea acestora cu partea de back-end a urmat procesul de
testare a aplicației. Dat fiind faptul că aplicația a avut un singur dezvoltator, s-a considerat că nu
sunt necesare teste automate, apelându-se la testarea manuală. S-au verificat rând pe rând toate
funcționalitățile și cazurile de utilizare. Pe măsură ce au fost descoperite erori, acestea au fost
remediate până aplicația a atins un nivel satisfăcător de stabilitate.
Ultima etapă a fost cea de stilizare, punându-se accent pe design și pe experiența utilizatorului.
