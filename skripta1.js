window.onload = function() {
    Učitaj(1);
    document.getElementById("link1").style.opacity="100%";
    document.getElementById("link1").style.fontSize="25px";
};

// ===== FILM DATA =====
const filmoviPodaci = [
    {
        id: 0,
        naslov: "DEVIL WEARS PRADA 2",
        originalniNaslov: "The Devil Wears Prada 2",
        zanr: "Komedija, Drama",
        trajanje: "2h",
        pocetakPrikazivanja: "30.04.2026.",
        opis: "Nastavak voljenog filma Đavo nosi Pradu.",
        glumci: "Stanley Tucci, Emily Blunt, Meryl Streep, Anne Hathaway",
        reziser: "David Frankel",
        tehnologije: "2D",
        slika: "film1.jpg",
        trailer: "https://www.youtube.com/embed/e9HXmMnUEdE",
        bioskopi: [
            { naziv: "MOVIE ZONA UŠĆE SHOPPING CENTER", termine: [
                { vreme: "14:30", sala: "SALA 2", tip: "2D" },
                { vreme: "17:00", sala: "SALA 5", tip: "2D" },
                { vreme: "22:00", sala: "SALA 4", tip: "2D" }
            ]},
            { naziv: "MOVIE ZONA BEO SHOPPING CENTER", termine: [
                { vreme: "13:00", sala: "SALA 1", tip: "2D" },
                { vreme: "19:30", sala: "SALA 3", tip: "2D" }
            ]},
            { naziv: "MOVIE ZONA DELTA CITY", termine: [
                { vreme: "16:00", sala: "SALA 6", tip: "2D" },
                { vreme: "20:45", sala: "SALA 2", tip: "2D" }
            ]}
        ]
    },
    {
        id: 1,
        naslov: "THE IMMORTAL MAN",
        originalniNaslov: "The Immortal Man",
        zanr: "Akcija, Krimi",
        trajanje: "2h 18min",
        pocetakPrikazivanja: "15.05.2026.",
        opis: "Tokom Drugog svetskog rata, Tomi Šelbi se vraća u bombardovani Birmingem i uključuje se u tajne ratne misije suočavajući se sa novim pretnjama dok se suočava sa svojom prošlošću.",
        glumci: "Cilian Murphy, Barry Keoghan, Rebecca Ferguson",
        reziser: "Tom Harper",
        tehnologije: "2D, IMAX",
        slika: "https://m.media-amazon.com/images/M/MV5BNTdlNTNjNjctYTg2MC00NTFlLTliNTctODFiZjZmNWRkYTVlXkEyXkFqcGc@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/RCZSm17_rvQ",
        bioskopi: [
            { naziv: "MOVIE ZONA UŠĆE SHOPPING CENTER", termine: [
                { vreme: "15:00", sala: "SALA 1", tip: "IMAX" },
                { vreme: "21:00", sala: "SALA 7", tip: "2D" }
            ]},
            { naziv: "MOVIE ZONA KRAGUJEVAC", termine: [
                { vreme: "18:00", sala: "SALA 3", tip: "2D" }
            ]}
        ]
    },
    {
        id: 2,
        naslov: "SINNERS",
        originalniNaslov: "Sinners",
        zanr: "Horor, Thriller",
        trajanje: "2h 17min",
        pocetakPrikazivanja: "17.04.2026.",
        opis: "Dva brata vraćaju se kući samo da bi otkrili da nešto mnogo gore od đavola čeka u tami.",
        glumci: "Michael B. Jordan, Hailee Steinfeld, Jack O'Connell",
        reziser: "Ryan Coogler",
        tehnologije: "2D",
        slika: "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/bKGxHflevuk",
        bioskopi: [
            { naziv: "MOVIE ZONA UŠĆE SHOPPING CENTER", termine: [
                { vreme: "16:30", sala: "SALA 3", tip: "2D" },
                { vreme: "20:00", sala: "SALA 8", tip: "2D" }
            ]},
            { naziv: "MOVIE ZONA BEO SHOPPING CENTER", termine: [
                { vreme: "19:00", sala: "SALA 4", tip: "2D" }
            ]},
            { naziv: "MOVIE ZONA NOVI SAD", termine: [
                { vreme: "17:45", sala: "SALA 2", tip: "2D" },
                { vreme: "21:30", sala: "SALA 5", tip: "2D" }
            ]}
        ]
    },
    {
        id: 3,
        naslov: "PROJECT HAIL MARY",
        originalniNaslov: "Project Hail Mary",
        zanr: "Sci-Fi, Avantura",
        trajanje: "2h 22min",
        pocetakPrikazivanja: "30.06.2026.",
        opis: "Usamljeni astronaut mora spasiti Zemlju od katastrofe dok se bori da oporavi svoje sećanje.",
        glumci: "Ryan Gosling, Nonso Anozie",
        reziser: "Phil Lord, Christopher Miller",
        tehnologije: "2D, IMAX",
        slika: "film4.jpg",
        trailer: "https://www.youtube.com/embed/m08TxIsFTRI",
        bioskopi: [
            { naziv: "MOVIE ZONA UŠĆE SHOPPING CENTER", termine: [
                { vreme: "14:00", sala: "SALA 2", tip: "IMAX" },
                { vreme: "20:30", sala: "SALA 6", tip: "2D" }
            ]},
            { naziv: "MOVIE ZONA DELTA CITY", termine: [
                { vreme: "18:15", sala: "SALA 1", tip: "2D" }
            ]}
        ]
    },
    {
        id: 4,
        naslov: "F1: THE MOVIE",
        originalniNaslov: "F1: The Movie",
        zanr: "Akcija, Sport",
        trajanje: "2h 30min",
        pocetakPrikazivanja: "25.06.2026.",
        opis: "Bivši vozač Formule 1 vraća se na stazu kako bi mentorski pomogao mladom talentu.",
        glumci: "Brad Pitt, Damson Idris, Kerry Condon",
        reziser: "Joseph Kosinski",
        tehnologije: "2D, IMAX, 4DX",
        slika: "film5.jpg",
        trailer: "https://www.youtube.com/embed/CT2_P2DZBR0",
        bioskopi: [
            { naziv: "MOVIE ZONA UŠĆE SHOPPING CENTER", termine: [
                { vreme: "13:30", sala: "SALA 4", tip: "4DX" },
                { vreme: "17:30", sala: "SALA 1", tip: "IMAX" },
                { vreme: "21:45", sala: "SALA 7", tip: "2D" }
            ]},
            { naziv: "MOVIE ZONA BEO SHOPPING CENTER", termine: [
                { vreme: "16:00", sala: "SALA 2", tip: "2D" },
                { vreme: "20:15", sala: "SALA 5", tip: "2D" }
            ]}
        ]
    },
    {
        id: 5,
        naslov: "THE BATMAN",
        originalniNaslov: "The Batman",
        zanr: "Akcija, Krimi",
        trajanje: "2h 56min",
        pocetakPrikazivanja: "04.03.2022.",
        opis: "Betmen ulazi u drugu godinu borbe s kriminalom u Gotamu i otkriva korupciju koja dopire do samog vrha.",
        glumci: "Robert Pattinson, Zoë Kravitz, Paul Dano, Jeffrey Wright",
        reziser: "Matt Reeves",
        tehnologije: "2D",
        slika: "https://m.media-amazon.com/images/S/pv-target-images/3de84cca07fc963b66a01a5465c2638066119711e89c707ce952555783dd4b4f.jpg",
        trailer: "https://www.youtube.com/embed/zk4wzhB5RVI",
        bioskopi: [
            { naziv: "MOVIE ZONA UŠĆE SHOPPING CENTER", termine: [
                { vreme: "18:00", sala: "SALA 3", tip: "2D" },
                { vreme: "22:30", sala: "SALA 9", tip: "2D" }
            ]},
            { naziv: "MOVIE ZONA NIŠ", termine: [
                { vreme: "19:30", sala: "SALA 2", tip: "2D" }
            ]}
        ]
    },
    {
        id: 6,
        naslov: "DUNE: PART TWO",
        originalniNaslov: "Dune: Part Two",
        zanr: "Sci-Fi, Avantura",
        trajanje: "2h 47min",
        pocetakPrikazivanja: "01.03.2024.",
        opis: "Pol Atreidis se ujedinjuje s Čani i Fremenima dok ratuje protiv kućnih Harkonnena.",
        glumci: "Timothée Chalamet, Zendaya, Rebecca Ferguson, Josh Brolin",
        reziser: "Denis Villeneuve",
        tehnologije: "2D, IMAX",
        slika: "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        trailer: "https://www.youtube.com/embed/Way9Dexny3w",
        bioskopi: [
            { naziv: "MOVIE ZONA UŠĆE SHOPPING CENTER", termine: [
                { vreme: "14:45", sala: "SALA 5", tip: "IMAX" },
                { vreme: "20:00", sala: "SALA 2", tip: "2D" }
            ]},
            { naziv: "MOVIE ZONA KRAGUJEVAC", termine: [
                { vreme: "17:00", sala: "SALA 1", tip: "2D" }
            ]},
            { naziv: "MOVIE ZONA NOVI SAD", termine: [
                { vreme: "19:15", sala: "SALA 4", tip: "2D" }
            ]}
        ]
    },
    {
        id: 7,
        naslov: "CRIME 101",
        originalniNaslov: "Crime 101",
        zanr: "Krimi, Triler",
        trajanje: "1h 58min",
        pocetakPrikazivanja: "30.06.2026.",
        opis: "Masterklasa u kriminalnoj taktici — jedan čovek, jedan plan, nula greški.",
        glumci: "Chris Hemsworth, Mark Ruffalo",
        reziser: "Steven Soderbergh",
        tehnologije: "2D",
        slika: "https://m.media-amazon.com/images/M/MV5BZThlN2M4ZTUtYTU3Mi00MDE5LWFhYWUtNjkxMWEwNjUwNDVhXkEyXkFqcGc@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/f5y-cziwmMw",
        bioskopi: [
            { naziv: "MOVIE ZONA BEO SHOPPING CENTER", termine: [
                { vreme: "15:30", sala: "SALA 3", tip: "2D" },
                { vreme: "19:45", sala: "SALA 7", tip: "2D" }
            ]},
            { naziv: "MOVIE ZONA DELTA CITY", termine: [
                { vreme: "21:00", sala: "SALA 4", tip: "2D" }
            ]}
        ]
    },
    {
        id: 8,
        naslov: "MORTAL KOMBAT II",
        originalniNaslov: "Mortal Kombat II",
        zanr: "Akcija, Fantazija",
        trajanje: "2h 10min",
        pocetakPrikazivanja: "30.06.2026.",
        opis: "Borci se vraćaju u epsku međuzemaljsku bitku — ovog puta s višim ulozima nego ikad.",
        glumci: "Lewis Tan, Jessica McNamee, Josh Lawson, Joe Taslim",
        reziser: "Simon McQuoid",
        tehnologije: "2D, 3D, 4DX",
        slika: "https://m.media-amazon.com/images/M/MV5BNTg2YWNkN2EtMzc1Ny00ZTBhLWFmYTItMmMyNzhjNjhhNmVhXkEyXkFqcGc@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/b24oG7qCwp4",
        bioskopi: [
            { naziv: "MOVIE ZONA UŠĆE SHOPPING CENTER", termine: [
                { vreme: "16:45", sala: "SALA 6", tip: "4DX" },
                { vreme: "21:15", sala: "SALA 8", tip: "2D" }
            ]},
            { naziv: "MOVIE ZONA BEO SHOPPING CENTER", termine: [
                { vreme: "14:00", sala: "SALA 1", tip: "3D" },
                { vreme: "18:30", sala: "SALA 4", tip: "2D" }
            ]},
            { naziv: "MOVIE ZONA NIŠ", termine: [
                { vreme: "20:00", sala: "SALA 3", tip: "2D" }
            ]}
        ]
    }
];

// ===== DATUMI =====
function generisiDatume() {
    const datumi = [];
    const danas = new Date();
    const dani = ["Ned", "Pon", "Uto", "Sre", "Čet", "Pet", "Sub"];
    const meseci = ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"];
    for (let i = 0; i < 7; i++) {
        const d = new Date(danas);
        d.setDate(danas.getDate() + i);
        datumi.push({
            dan: i === 0 ? "Danas" : dani[d.getDay()],
            broj: d.getDate(),
            mesec: meseci[d.getMonth()],
            datum: d
        });
    }
    return datumi;
}

// ===== FILM PAGE =====
function UčitajFilm(id) {
    const film = filmoviPodaci[id];
    if (!film) return;

    const datumi = generisiDatume();
    const datumiHTML = datumi.map((d, i) => `
        <button class="datum-btn ${i === 0 ? 'aktivan' : ''}" onclick="promenDatum(${i}, ${id})" data-index="${i}">
            <span class="datum-dan">${d.dan}</span>
            <span class="datum-broj">${d.broj} ${d.mesec}</span>
        </button>
    `).join('');

    const bioskopiHTML = film.bioskopi.map(bioskop => `
        <div class="bioskop-sekcija">
            <h3 class="bioskop-naziv">${bioskop.naziv}</h3>
            <div class="termini-lista">
                ${bioskop.termine.map(t => `
                    <button class="termin-btn" onclick="otvoriRezervaciju('${film.naslov}', '${bioskop.naziv}', '${t.vreme}', '${t.sala}', '${t.tip}')">
                        <span class="termin-vreme">${t.vreme}</span>
                        <span class="termin-info">${t.sala} &bull; ${t.tip}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `).join('');

    document.body.insertAdjacentHTML('beforeend', `
        <div class="film-overlay" id="filmOverlay" onclick="zatvoriFilm(event)">
            <div class="film-page">
                <button class="zatvori-btn" onclick="zatvoriFilmBtn()">&#10005;</button>
                
                <div class="film-gornji-deo">
                    <div class="film-levo">
                        <img class="film-poster" src="${film.slika}" alt="${film.naslov}">
                        <div class="film-mini-slike">
                            <img src="${film.slika}" alt="">
                        </div>
                    </div>
                    
                    <div class="film-sredina">
                        <h1 class="film-naslov-veliki">${film.naslov}</h1>
                        <p class="film-zanr-trajanje">${film.zanr} &bull; ${film.trajanje}</p>
                        
                        <div class="datum-biraci">
                            ${datumiHTML}
                        </div>
                        
                        <div class="bioskopi-lista" id="bioskopiLista">
                            ${bioskopiHTML}
                        </div>
                    </div>
                    
                    <div class="film-desno">
                        <div class="trailer-wrapper">
                            <iframe src="${film.trailer}?rel=0&modestbranding=1" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
                        </div>
                        <p class="film-opis-mini">${film.opis}</p>
                        <button class="prikazi-vise-btn">PRIKAŽI VIŠE</button>
                        
                        <div class="film-detalji">
                            <div class="detalj-red"><span class="detalj-label">Originalni naslov</span><span class="detalj-vrednost">${film.originalniNaslov}</span></div>
                            <div class="detalj-red"><span class="detalj-label">Početak prikazivanja</span><span class="detalj-vrednost">${film.pocetakPrikazivanja}</span></div>
                            <div class="detalj-red"><span class="detalj-label">Dužina trajanja filma</span><span class="detalj-vrednost">${film.trajanje}</span></div>
                            <div class="detalj-red"><span class="detalj-label">Dostupne tehnologije i verzije</span><span class="detalj-vrednost">${film.tehnologije}</span></div>
                            <div class="detalj-red"><span class="detalj-label">Glumci</span><span class="detalj-vrednost">${film.glumci}</span></div>
                            <div class="detalj-red"><span class="detalj-label">Režiseri</span><span class="detalj-vrednost">${film.reziser}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);

    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('filmOverlay').classList.add('vidljiv'), 10);
}

function promenDatum(index, filmId) {
    document.querySelectorAll('.datum-btn').forEach((btn, i) => {
        btn.classList.toggle('aktivan', i === index);
    });
}

function zatvoriFilm(e) {
    if (e.target.id === 'filmOverlay') zatvoriFilmBtn();
}

function zatvoriFilmBtn() {
    const overlay = document.getElementById('filmOverlay');
    if (overlay) {
        overlay.classList.remove('vidljiv');
        setTimeout(() => { overlay.remove(); document.body.style.overflow = ''; }, 400);
    }
    const rezOverlay = document.getElementById('rezervacijaOverlay');
    if (rezOverlay) rezOverlay.remove();
}

// ===== REZERVACIJA =====
function otvoriRezervaciju(film, bioskop, vreme, sala, tip) {
    const stariModal = document.getElementById('rezervacijaOverlay');
    if (stariModal) stariModal.remove();

    // Generisi sedišta (10x8 grid)
    const redovi = ['A','B','C','D','E','F','G','H'];
    const kolone = 10;
    let sedistaHTML = '';
    redovi.forEach(red => {
        sedistaHTML += `<div class="sedista-red"><span class="red-label">${red}</span>`;
        for (let k = 1; k <= kolone; k++) {
            const zauzeto = Math.random() < 0.25;
            sedistaHTML += `<div class="sediste ${zauzeto ? 'zauzeto' : 'slobodno'}" 
                data-id="${red}${k}" 
                onclick="označiSediste(this, ${zauzeto})"
                title="${red}${k}"></div>`;
        }
        sedistaHTML += `</div>`;
    });

    document.body.insertAdjacentHTML('beforeend', `
        <div class="rezervacija-overlay" id="rezervacijaOverlay" onclick="zatvoriRezervaciju(event)">
            <div class="rezervacija-modal">
                <button class="zatvori-btn" onclick="document.getElementById('rezervacijaOverlay').remove()">&#10005;</button>
                <h2 class="rez-naslov">${film}</h2>
                <div class="rez-info-red">
                    <span>&#128197; <strong>${new Date().toLocaleDateString('sr-RS')}</strong></span>
                    <span>&#128336; <strong>${vreme}</strong></span>
                    <span>&#127920; <strong>${sala}</strong></span>
                    <span><strong>${tip}</strong></span>
                </div>
                <p class="rez-bioskop-naziv">📍 ${bioskop}</p>
                
                <div class="legenda">
                    <div class="legenda-item"><div class="sediste slobodno legenda-sediste"></div><span>Slobodno</span></div>
                    <div class="legenda-item"><div class="sediste izabrano legenda-sediste"></div><span>Izabrano</span></div>
                    <div class="legenda-item"><div class="sediste zauzeto legenda-sediste"></div><span>Zauzeto</span></div>
                </div>

                <div class="ekran-wrapper"><div class="ekran">EKRAN</div></div>
                
                <div class="sedista-grid">
                    ${sedistaHTML}
                </div>

                <div class="rez-footer">
                    <div class="izabrana-sedista">
                        <span>Izabrana sedišta: </span>
                        <span id="izabranaSedistaSpan">—</span>
                    </div>
                    <div class="cena-info">
                        Cena: <strong id="ukupnaCena">0 RSD</strong>
                    </div>
                    <button class="kupovina-btn" onclick="potvrdiKupovinu()">KUPI KARTU</button>
                </div>
            </div>
        </div>
    `);

    setTimeout(() => document.getElementById('rezervacijaOverlay').classList.add('vidljiv'), 10);
}

let izabranaSedista = [];

function označiSediste(el, zauzeto) {
    if (zauzeto) return;
    const id = el.dataset.id;
    if (el.classList.contains('izabrano')) {
        el.classList.remove('izabrano');
        el.classList.add('slobodno');
        izabranaSedista = izabranaSedista.filter(s => s !== id);
    } else {
        el.classList.remove('slobodno');
        el.classList.add('izabrano');
        izabranaSedista.push(id);
    }
    document.getElementById('izabranaSedistaSpan').textContent = izabranaSedista.length ? izabranaSedista.join(', ') : '—';
    document.getElementById('ukupnaCena').textContent = (izabranaSedista.length * 650) + ' RSD';
}

function zatvoriRezervaciju(e) {
    if (e.target.id === 'rezervacijaOverlay') {
        document.getElementById('rezervacijaOverlay').remove();
        izabranaSedista = [];
    }
}

function potvrdiKupovinu() {
    if (izabranaSedista.length === 0) {
        alert('Molimo izaberite sedište!');
        return;
    }
    alert(`✅ Uspešno ste rezervisali sedišta: ${izabranaSedista.join(', ')}\nUkupno: ${izabranaSedista.length * 650} RSD\n\nHvala na kupovini!`);
    document.getElementById('rezervacijaOverlay').remove();
    izabranaSedista = [];
}

// ===== MAIN LOAD =====
function Učitaj(n){
    switch(n){
        case 1:
            document.getElementById("ispis").innerHTML=`
            <div class="filmovi"> <img onclick="UčitajFilm(0)" id="filmSlika" src="film1.jpg"><p id="glavniNaslov">DEVIL WEARS PRADA 2</p><p id="sporedniNaslov">Početak prikazivanja: 30.06.2026.</p></div>
            <div class="filmovi"> <img onclick="UčitajFilm(1)" id="filmSlika" src="https://m.media-amazon.com/images/M/MV5BNTdlNTNjNjctYTg2MC00NTFlLTliNTctODFiZjZmNWRkYTVlXkEyXkFqcGc@._V1_.jpg"><p id="glavniNaslov">THE IMMORTAL MAN</p><p id="sporedniNaslov">Početak prikazivanja: 15.05.2026.</p></div>
            <div class="filmovi"> <img onclick="UčitajFilm(2)" id="filmSlika" src="https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_.jpg"><p id="glavniNaslov">SINNERS</p><p id="sporedniNaslov">Početak prikazivanja: 30.06.2026.</p></div>
            <div class="filmovi"> <img onclick="UčitajFilm(3)" id="filmSlika" src="film4.jpg"><p id="glavniNaslov">PROJECT HAIL MARY</p><p id="sporedniNaslov">Početak prikazivanja: 30.06.2026.</p></div>
            <div class="filmovi"> <img onclick="UčitajFilm(4)" id="filmSlika" src="film5.jpg"><p id="glavniNaslov">F1: THE MOVIE</p><p id="sporedniNaslov">Početak prikazivanja: 30.06.2026.</p></div>
            <div class="filmovi"> <img onclick="UčitajFilm(5)" id="filmSlika" src="https://m.media-amazon.com/images/S/pv-target-images/3de84cca07fc963b66a01a5465c2638066119711e89c707ce952555783dd4b4f.jpg"><p id="glavniNaslov">THE BATMAN</p><p id="sporedniNaslov">Početak prikazivanja: 30.06.2026.</p></div>
            <div class="filmovi"> <img onclick="UčitajFilm(6)" id="filmSlika" src="https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"><p id="glavniNaslov">DUNE: PART TWO</p><p id="sporedniNaslov">Početak prikazivanja: 30.06.2026.</p></div>
            <div class="filmovi"> <img onclick="UčitajFilm(7)" id="filmSlika" src="https://m.media-amazon.com/images/M/MV5BZThlN2M4ZTUtYTU3Mi00MDE5LWFhYWUtNjkxMWEwNjUwNDVhXkEyXkFqcGc@._V1_.jpg"><p id="glavniNaslov">CRIME 101</p><p id="sporedniNaslov">Početak prikazivanja: 30.06.2026.</p></div>
            <div class="filmovi"> <img onclick="UčitajFilm(8)" id="filmSlika" src="https://m.media-amazon.com/images/M/MV5BNTg2YWNkN2EtMzc1Ny00ZTBhLWFmYTItMmMyNzhjNjhhNmVhXkEyXkFqcGc@._V1_.jpg"><p id="glavniNaslov">MORTAL KOMBAT II</p><p id="sporedniNaslov">Početak prikazivanja: 30.06.2026.</p></div>
            `
            document.getElementById("link1").style.opacity="100%";
            document.getElementById("link1").style.fontSize="25px";
            document.getElementById("link2").style.opacity="60%";
            document.getElementById("link2").style.fontSize="20px";
            document.getElementById("link3").style.opacity="60%";
            document.getElementById("link3").style.fontSize="20px";
            document.getElementById("videi").hidden=false;
            break;
        case 2:
            document.getElementById("link1").style.opacity="60%";
            document.getElementById("link1").style.fontSize="20px";
            document.getElementById("link2").style.opacity="100%";
            document.getElementById("link2").style.fontSize="25px";
            document.getElementById("link3").style.opacity="60%";
            document.getElementById("link3").style.fontSize="20px";
            document.getElementById("videi").hidden=false;
            // Grupisanje filmova po bioskopu
            const bioskopiMapa = {};
            const bioskopiAdrese = {
                "MOVIE ZONA UŠĆE SHOPPING CENTER": "Bulevar Mihajla Pupina 4, Beograd",
                "MOVIE ZONA BEO SHOPPING CENTER": "Vojvode Stepe 141, Beograd",
                "MOVIE ZONA DELTA CITY": "Jurija Gagarina 16, Beograd",
                "MOVIE ZONA KRAGUJEVAC": "Cara Dušana 1, Kragujevac",
                "MOVIE ZONA NOVI SAD": "Bulevar oslobođenja 103, Novi Sad",
                "MOVIE ZONA NIŠ": "Bulevar Nemanjića 44, Niš"
            };

            filmoviPodaci.forEach(film => {
                film.bioskopi.forEach(bioskop => {
                    if (!bioskopiMapa[bioskop.naziv]) bioskopiMapa[bioskop.naziv] = [];
                    bioskopiMapa[bioskop.naziv].push(film);
                });
            });

            let bioskopiHTML2 = '';
            for (const [nazivBioskopa, filmovi] of Object.entries(bioskopiMapa)) {
                const adresa = bioskopiAdrese[nazivBioskopa] || '';
                const filmoviKarteHTML = filmovi.map(film => `
                    <div class="bios-film-karta" onclick="UčitajFilm(${film.id})">
                        <div class="bios-film-poster-wrap">
                            <img class="bios-film-poster" src="${film.slika}" alt="${film.naslov}">
                            <div class="bios-film-hover-info">
                                <span class="bios-film-zanr">${film.zanr}</span>
                            </div>
                        </div>
                        <p class="bios-film-naslov">${film.naslov}</p>
                        <p class="bios-film-pocetak">Od ${film.pocetakPrikazivanja}</p>
                    </div>
                `).join('');

                bioskopiHTML2 += `
                    <div class="bios-sekcija">
                        <div class="bios-header">
                            <div>
                                <h2 class="bios-naziv">${nazivBioskopa}</h2>
                                <p class="bios-adresa">${adresa}</p>
                            </div>
                        </div>
                        <div class="bios-filmovi-skrol-wrap">
                            <button class="bios-strelica bios-prev" onclick="skrolBioskop(this, -1)">&#10094;</button>
                            <div class="bios-filmovi-skrol">
                                ${filmoviKarteHTML}
                            </div>
                            <button class="bios-strelica bios-next" onclick="skrolBioskop(this, 1)">&#10095;</button>
                        </div>
                    </div>
                `;
            }

            document.getElementById("ispis").innerHTML = `<div class="bios-kontejner">${bioskopiHTML2}</div>`;
            break;
        case 3:
            document.getElementById("link1").style.opacity="60%";
            document.getElementById("link1").style.fontSize="20px";
            document.getElementById("link2").style.opacity="60%";
            document.getElementById("link2").style.fontSize="20px";
            document.getElementById("link3").style.opacity="100%";
            document.getElementById("link3").style.fontSize="25px";
            document.getElementById("videi").hidden=true;
            document.getElementById("ispis").innerHTML=`<div class="tekst">
            <h2 id="tekstVeliki"><b>ZAKUP BIOSKOPSKIH SALA</b></h2>
            <h2 id="tekstVeliki"><b>MOVIE ZONA - PRAVO MESTO ZA VAŠ DOGAĐAJ</b></h2>
            <p>- Promotivni događaji<br>

                - Kongresi<br>

                - Prezentacije proizvoda<br>

                - Seminari<br><br>



                Tražite jedinstvenu lokaciju za sledeći korporativni događaj?<br><br>

                Movie Zona nudi atraktivan prostor za sastanke, korporativne događaje, team building sastanke ili događaje iz oblasti kulture u prostranom foajeu, komfornim salama sa savršenom tehnikom prezentacije slike i zvuka, što čini vaš događaj izuzetnim za klijente i njihove goste.<br><br>

                Movie Zona predstavlja idealan prostor i jedinstvenu postavku za vaš događaj. Svaki događaj može da se kombinuje sa nekim filmom. Pomešajte posao sa uživanjem i na taj način efikasno prenesite svoje poruke!
            </p>
            </div>
            `;
            break;
    }
}

let currentIndex = 0;

function getCarouselElements() {
    const inner = document.querySelector('.carousel-inner');
    const slides = document.querySelectorAll('.carousel-item');
    return { inner, slides, totalSlides: slides.length };
}

function showSlide(index) {
    const { inner, totalSlides } = getCarouselElements();
    if (!inner) return;
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;
    inner.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function moveSlide(step) {
    showSlide(currentIndex + step);
    resetAutoPlay();
}

let autoPlayInterval = setInterval(() => { moveSlide(1); }, 8000);

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => { moveSlide(1); }, 8000);
}

function skrolBioskop(btn, smer) {
    const wrap = btn.parentElement.querySelector(".bios-filmovi-skrol");
    wrap.scrollBy({ left: smer * 270, behavior: "smooth" });
}
