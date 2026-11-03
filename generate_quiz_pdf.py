import os
import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import cm, mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, PageBreak, HRFlowable
)
from reportlab.pdfgen import canvas

pdf_path = r"C:\Users\nnnnn\Downloads\Kuis_Pra_UTS_Jarkom_IF-C_2506068_Nesya_Rahma.pdf"

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(NumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super(NumberedCanvas, self).showPage()
        super(NumberedCanvas, self).save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Times-Italic", 8.5)
        self.setFillColor(colors.HexColor("#333333"))
        
        # Running Header (pages > 1)
        if self._pageNumber > 1:
            self.drawRightString(A4[0] - 2.54 * cm, A4[1] - 1.8 * cm, "INSTITUT TEKNOLOGI GARUT • JARINGAN KOMPUTER (KUIS PRA UTS)")
            self.setStrokeColor(colors.HexColor("#666666"))
            self.setLineWidth(0.5)
            self.line(2.54 * cm, A4[1] - 1.95 * cm, A4[0] - 2.54 * cm, A4[1] - 1.95 * cm)

        # Running Footer (all pages)
        self.setFont("Times-Roman", 8.5)
        self.drawString(2.54 * cm, 1.5 * cm, "Nesya Rahma (NIM: 2506068) • Kelas IF-2025 C")
        page_str = f"Halaman {self._pageNumber} dari {page_count}"
        self.drawRightString(A4[0] - 2.54 * cm, 1.5 * cm, page_str)
        self.setStrokeColor(colors.HexColor("#999999"))
        self.setLineWidth(0.5)
        self.line(2.54 * cm, 1.7 * cm, A4[0] - 2.54 * cm, 1.7 * cm)
        self.restoreState()

# Questions Data (1 to 40)
questions = [
    {
        "no": 1,
        "q": "Port TCP berapakah yang digunakan untuk layanan FTP dan SMTP...",
        "opts": ["a. Port 20 dan 80", "b. Port 21 dan 25", "c. Port 21 dan 23", "d. Port 21 dan 110"],
        "ans": "b. Port 21 dan 25",
        "exp": "FTP (File Transfer Protocol) menggunakan port TCP 21 sebagai command/control channel (dan port 20 untuk transfer data). SMTP (Simple Mail Transfer Protocol) secara default menggunakan port TCP 25 untuk pertukaran dan pengiriman email antar mail server (MTA)."
    },
    {
        "no": 2,
        "q": "Pada jaringan komputer yang menggunakan IPv4 kelas IP Address yang bisa digunakan antara lain...",
        "opts": ["a. A B dan E", "b. A B dan D", "c. A B dan D", "d. A B dan C"],
        "ans": "d. A B dan C",
        "exp": "Pengalamatan IPv4 unicast yang dialokasikan untuk perangkat host umum di jaringan komputer adalah Kelas A (1.0.0.0 – 126.255.255.255), Kelas B (128.0.0.0 – 191.255.255.255), dan Kelas C (192.0.0.0 – 223.255.255.255). Kelas D digunakan khusus untuk multicasting, sedangkan Kelas E dicadangkan untuk eksperimen/riset."
    },
    {
        "no": 3,
        "q": "Apa fungsi utama dari Layer Physical pada model OSI?",
        "opts": ["a. Menyediakan mekanisme koreksi kesalahan", "b. Menentukan alamat logis", "c. Menyediakan layanan untuk aplikasi jaringan", "d. Mengelola transmisi data antar perangkat fisik"],
        "ans": "d. Mengelola transmisi data antar perangkat fisik",
        "exp": "Physical Layer (Lapisan 1 OSI) bertanggung jawab untuk mentransmisikan bit-bit data mentah (stream of bits) melalui media transmisi fisik (tegangan listrik pada tembaga, pulsa cahaya pada serat optik, atau gelombang radio nirkabel) serta mengatur spesifikasi mekanis dan elektrik konektor."
    },
    {
        "no": 4,
        "q": "Protokol yang digunakan untuk mengirim email adalah:",
        "opts": ["a. SMTP", "b. FTP", "c. HTTP", "d. DNS"],
        "ans": "a. SMTP",
        "exp": "SMTP (Simple Mail Transfer Protocol) beroperasi pada layer aplikasi dan dirancang khusus untuk mendorong/mengirimkan (push) pesan email dari mail client ke mail server maupun antar mail transfer agent. Sebaliknya, protokol penarik email masuk adalah POP3 atau IMAP."
    },
    {
        "no": 5,
        "q": "Dalam Cisco mode yang hanya memiliki perintah-perintah terbatas meliputi perintah yang bersifat monitoring atau view adalah...",
        "opts": ["a. Exec", "b. Exec Privilage", "c. User Exec", "d. User Mode"],
        "ans": "c. User Exec",
        "exp": "Pada sistem operasi Cisco IOS, User EXEC mode ditandai dengan prompt 'Router>'. Mode ini memiliki hak akses paling dasar yang hanya mengizinkan eksekusi perintah monitoring non-destruktif (seperti show dasar, ping, dan traceroute) tanpa kemampuan mengubah konfigurasi perangkat."
    },
    {
        "no": 6,
        "q": "Berapa jumlah host maksimum dalam subnet dengan subnet mask 255.255.255.224?",
        "opts": ["a. 62", "b. 16", "c. 126", "d. 30"],
        "ans": "d. 30",
        "exp": "Subnet mask 255.255.255.224 setara dengan notasi CIDR /27 (biner oktet terakhir: 11100000). Jumlah bit host tersisa adalah h = 32 - 27 = 5 bit. Jumlah host valid yang dapat digunakan dihitung dengan rumus 2^h - 2 = 2^5 - 2 = 32 - 2 = 30 host (dua alamat dikurangi untuk Network ID dan Broadcast ID)."
    },
    {
        "no": 7,
        "q": "Algoritma routing distance vector disebut juga dengan:",
        "opts": ["a. Algoritma Bellman-Ford", "b. Algoritma Spanning Tree", "c. Algoritma Dijkstra", "d. Algoritma Shortest Path First"],
        "ans": "a. Algoritma Bellman-Ford",
        "exp": "Protokol routing Distance Vector (seperti RIP dan IGRP) menggunakan Algoritma Bellman-Ford (atau Ford-Fulkerson) untuk menghitung jarak terpendek berdasarkan akumulasi bobot vektor/hop count. Sebagai perbandingan, algoritma Link-State (seperti OSPF) menggunakan Algoritma Dijkstra/Shortest Path First."
    },
    {
        "no": 8,
        "q": "Manakah pengertian yang paling sesuai mengenai Jaringan Komputer...",
        "opts": ["a. Komputer yang terhubung modem", "b. Hubungan 2 komputer atau lebih agar bisa berkomunikasi/bertukar data", "c. Komputer yang digunakan untuk browsing internet", "d. Hubungan komputer dengan perangkat komunikasi"],
        "ans": "b. Hubungan 2 komputer atau lebih agar bisa berkomunikasi/bertukar data",
        "exp": "Secara fundamental, jaringan komputer adalah interkoneksi antara dua atau lebih sistem komputer otonom melalui media transmisi kabel atau nirkabel yang memungkinkan pertukaran data, komunikasi sinyal, dan berbagi sumber daya (resource sharing) secara terintegrasi."
    },
    {
        "no": 9,
        "q": "Apa peran utama dari subnetting dalam jaringan lokal?",
        "opts": ["a. Meningkatkan penggunaan bandwidth", "b. Menyimpan data dengan lebih cepat", "c. Membagi jaringan besar menjadi lebih kecil untuk mengurangi lalu lintas", "d. Mengoptimalkan penggunaan alamat MAC"],
        "ans": "c. Membagi jaringan besar menjadi lebih kecil untuk mengurangi lalu lintas",
        "exp": "Peran utama subnetting adalah memecah broadcast domain yang besar menjadi beberapa sub-jaringan (subnet) yang lebih kecil dan terisolasi. Hal ini mengurangi lalu lintas paket broadcast yang berlebihan, meminimalisir tabrakan data (collision), meningkatkan performa dan keamanan, serta mengoptimalkan efisiensi alokasi IP."
    },
    {
        "no": 10,
        "q": "Kabel dan port yang digunakan untuk mengakses switch ...",
        "opts": ["a. Kabel UTP dan port ethernet", "b. Kabel Console dan port Console", "c. Kabel STP dan port Modem", "d. Kabel console dan port AUX"],
        "ans": "b. Kabel Console dan port Console",
        "exp": "Untuk manajemen lokal tingkat rendah dan konfigurasi awal (out-of-band management) pada perangkat Switch Cisco yang belum terkonfigurasi IP, teknisi menggunakan Kabel Console (rollover cable) yang dihubungkan langsung dari port serial/USB komputer ke port Console fisik pada Switch."
    },
    {
        "no": 11,
        "q": "Apa subnet mask yang digunakan jika Anda ingin membagi jaringan kelas C menjadi 8 subnet?",
        "opts": ["a. 255.255.255.0", "b. 255.255.255.224", "c. 255.255.255.192", "d. 255.255.255.248"],
        "ans": "b. 255.255.255.224",
        "exp": "Jaringan default Kelas C memiliki prefiks /24. Untuk menghasilkan minimal 8 subnet, berlaku rumus 2^n >= 8, di mana n adalah bit yang dipinjam dari host id (n = 3 bit, karena 2^3 = 8). Prefiks baru menjadi /24 + 3 = /27. Nilai oktet terakhir pada subnet mask adalah biner 11100000 = 128 + 64 + 32 = 224 (255.255.255.224)."
    },
    {
        "no": 12,
        "q": "Bagian pelindung serat optik yang melindungi serat dari kelembaban adalah:",
        "opts": ["a. Cladding", "b. Coating", "c. Outer Jacket", "d. Core"],
        "ans": "b. Coating",
        "exp": "Coating (sering disebut juga buffer coating) adalah lapisan plastik atau polimer fleksibel berlapis multi-mikron yang menyelimuti cladding. Fungsinya melindungi kaca core dari goresan mekanis, radiasi mikro, serta kelembaban udara (moisture) yang dapat menyebabkan perlemahan gelombang cahaya."
    },
    {
        "no": 13,
        "q": "Protokol yang digunakan untuk menyampaikan informasi kesalahan jaringan adalah:",
        "opts": ["a. FTP", "b. TCP", "c. UDP", "d. ICMP"],
        "ans": "d. ICMP",
        "exp": "ICMP (Internet Control Message Protocol) adalah protokol pendukung pada layer Network yang bertugas menghasilkan pesan kontrol, diagnostik operasional, dan laporan kondisi kesalahan (error reporting) antar host dan router (contoh: Destination Unreachable, Time Exceeded/TTL expired, dan Echo Request/Reply pada Ping)."
    },
    {
        "no": 14,
        "q": "Apa fungsi dari Dropcore dalam instalasi fiber optic?",
        "opts": ["a. Meneruskan sinyal optik dari ODP ke pelanggan", "b. Menyambungkan serat optik", "c. Menguji kekuatan sinyal", "d. Menghubungkan dua perangkat"],
        "ans": "a. Meneruskan sinyal optik dari ODP ke pelanggan",
        "exp": "Kabel Dropcore (drop cable) adalah kabel serat optik luar ruang khusus (biasanya 1 atau 2 core bertulang kawat baja penggantung) yang berfungsi sebagai kabel last-mile access untuk menyalurkan sinyal cahaya dari Optical Distribution Point (ODP) di tiang distribusi luar ke Optical Terminal Point (OTP) atau modem ONT di rumah pelanggan."
    },
    {
        "no": 15,
        "q": "Apa keunggulan teknik Fusion Splicing dalam penyambungan fiber optic?",
        "opts": ["a. Menghasilkan redaman yang tinggi", "b. Menghasilkan redaman yang sangat rendah", "c. Lebih mudah dibandingkan teknik konektor", "d. Tidak memerlukan alat khusus"],
        "ans": "b. Menghasilkan redaman yang sangat rendah",
        "exp": "Fusion Splicing meleburkan dan menyatukan dua ujung inti serat kaca silika secara permanen menggunakan busur elektroda listrik presisi tinggi. Keunggulan utamanya adalah menghasilkan insertion loss (redaman/rugi daya transmisi) yang sangat kecil, umumnya di bawah 0.02 s.d. 0.05 dB, jauh lebih baik dibanding sambungan mekanik."
    },
    {
        "no": 16,
        "q": "Alamat yang berfungsi mengirimkan pesan kepada seluruh host didalam jaringan adalah...",
        "opts": ["a. Alamat Subnet (Subnet Address)", "b. Semua salah", "c. Alamat Broadcast (Broadcast Address)", "d. Alamat IP Host (Host Address)"],
        "ans": "c. Alamat Broadcast (Broadcast Address)",
        "exp": "Alamat Broadcast (Broadcast Address) adalah alamat IP khusus di mana seluruh bit host bernilai biner 1. Paket data yang dikirimkan ke alamat ini akan disebarluaskan dan diterima secara simultan oleh semua kartu antarmuka jaringan (NIC) perangkat dalam satu domain jaringan logis yang sama."
    },
    {
        "no": 17,
        "q": "Urutan warna di dalam susunan kabel UTP jenis STRAIGHT adalah...",
        "opts": [
            "a. Putih-Oranye Oranye Putih-Hijau Biru Putih-Biru Hijau Putih-Coklat Coklat",
            "b. Oranye-Putih Oranye Biru-Putih Hijau Hijau-Putih Biru Putih-Coklat Coklat",
            "c. Putih Oranye-Oranye Putih Biru-Hijau Putih Hijau-Biru Putih Coklat-Coklat",
            "d. Putih Putih-Oranye Biru Putih-Hijau Hijau-Putih Biru Putih-CoklatCoklat"
        ],
        "ans": "a. Putih-Oranye Oranye Putih-Hijau Biru Putih-Biru Hijau Putih-Coklat Coklat",
        "exp": "Urutan standar kabel straight paling umum di dunia jaringan mengikuti standar industri TIA/EIA-568B: Pin 1: Putih-Oranye, Pin 2: Oranye, Pin 3: Putih-Hijau, Pin 4: Biru, Pin 5: Putih-Biru, Pin 6: Hijau, Pin 7: Putih-Coklat, Pin 8: Coklat."
    },
    {
        "no": 18,
        "q": "Alamat IP manakah yang merupakan contoh dari IP publik kelas A?",
        "opts": ["a. 10.0.0.1", "b. 100.64.0.1", "c. 8.8.8.8", "d. 192.168.1.1"],
        "ans": "c. 8.8.8.8",
        "exp": "Kelas A mencakup rentang oktet pertama 1 s.d. 126. Rentang 10.0.0.0/8 dialokasikan khusus sebagai IP Privat (RFC 1918), sedangkan 100.64.0.0/10 adalah Carrier-Grade NAT (RFC 6598). Alamat 8.8.8.8 (Server DNS Publik Google) adalah alamat IP Publik Kelas A yang sah dan dapat dirutekan secara global di internet."
    },
    {
        "no": 19,
        "q": "Urutan kabel pada ujung Straight harus:",
        "opts": ["a. Sama di kedua ujung", "b. Berbeda di kedua ujung", "c. Mengikuti konfigurasi Cross", "d. Disesuaikan dengan perangkat"],
        "ans": "a. Sama di kedua ujung",
        "exp": "Kabel Straight-Through dirancang untuk mentransmisikan sinyal satu-ke-satu tanpa pembalikan polaritas, sehingga urutan pinout warna pada kedua konektor RJ-45 harus identik di kedua ujungnya (T568B pada ujung A dan T568B pada ujung B)."
    },
    {
        "no": 20,
        "q": "Kapan metode transmisi Multicast digunakan?",
        "opts": ["a. Saat data dikirim ke seluruh jaringan", "b. Saat data dikirim ke kelompok komputer tertentu", "c. Saat data dikirim ke banyak komputer dalam satu jaringan", "d. Saat data dikirim ke satu tujuan"],
        "ans": "b. Saat data dikirim ke kelompok komputer tertentu",
        "exp": "Transmisi Multicast (one-to-many group) digunakan ketika sebuah sumber data ingin mengirimkan paket tunggal yang diduplikasi secara efisien hanya ke sekelompok host terdaftar yang tergabung dalam grup multicast (Class D IP: 224.0.0.0/4), seperti pada protokol streaming video IPTV atau update routing OSPF."
    },
    {
        "no": 21,
        "q": "Apa kelemahan dari jaringan client-server?",
        "opts": [
            "a. Tidak memerlukan administrator jaringan.",
            "b. Jika server down, seluruh jaringan tidak bisa beroperasi.",
            "c. Membutuhkan perangkat keras dengan spesifikasi rendah.",
            "d. Tidak mendukung keamanan jaringan."
        ],
        "ans": "b. Jika server down, seluruh jaringan tidak bisa beroperasi.",
        "exp": "Arsitektur Client-Server memiliki titik kegagalan tunggal (single point of failure). Karena penyimpanan data, autentikasi, dan aplikasi terpusat di server, apabila server mengalami gangguan perangkat keras, listrik, atau down, semua workstation client kehilangan akses layanan."
    },
    {
        "no": 22,
        "q": "IEEE 802.5 adalah standar untuk:",
        "opts": ["a. Ethernet", "b. Token Ring", "c. Token Bus", "d. CSMA/CD"],
        "ans": "b. Token Ring",
        "exp": "Standar komite IEEE membagi teknologi jaringan LAN: IEEE 802.3 adalah standar Ethernet (berbasis akses media CSMA/CD), IEEE 802.4 adalah Token Bus, IEEE 802.11 adalah Wireless LAN/Wi-Fi, dan IEEE 802.5 adalah standar arsitektur Token Ring yang dikembangkan oleh IBM."
    },
    {
        "no": 23,
        "q": "Berapa banyak total alamat yang dapat dihasilkan oleh IPv4?",
        "opts": ["a. Tidak terbatas", "b. 4 miliar", "c. 128 triliun", "d. 256 juta"],
        "ans": "b. 4 miliar",
        "exp": "IPv4 menggunakan format pengalamatan biner 32 bit. Dengan demikian, ruang alamat total yang secara matematis dapat dibentuk adalah 2^32 = 4.294.967.296 alamat (kira-kira 4,29 miliar alamat IP unik)."
    },
    {
        "no": 24,
        "q": "Urutan warna pada kedua ujung kabel Cross:",
        "opts": ["a. Tergantung pada panjang kabel", "b. Sama", "c. Berbeda", "d. Bergantung pada perangkat"],
        "ans": "c. Berbeda",
        "exp": "Kabel Cross-Over dirancang untuk menghubungkan pin kirim (Transmit - Tx) di satu sisi ke pin terima (Receive - Rx) di sisi lainnya. Oleh karena itu, ujung kabel 1 menggunakan standar T568A dan ujung kabel 2 menggunakan standar T568B, sehingga susunan warnanya berbeda."
    },
    {
        "no": 25,
        "q": "Protokol yang beroperasi di Layer Network untuk menentukan rute tujuan adalah:",
        "opts": ["a. UDP", "b. IP", "c. TCP", "d. FTP"],
        "ans": "b. IP",
        "exp": "IP (Internet Protocol) adalah protokol utama pada Layer 3 (Network Layer) dalam model OSI dan stack TCP/IP yang bertugas menangani enkapsulasi datagram, logical addressing (IPv4/IPv6), dan packet routing menuju jaringan tujuan."
    },
    {
        "no": 26,
        "q": "Manakah yang tidak termasuk perangkat jaringan komputer...",
        "opts": ["a. Handphone", "b. Switch / Hub", "c. Router", "d. Modem"],
        "ans": "a. Handphone",
        "exp": "Switch, Hub, Router, dan Modem merupakan perangkat infrastruktur perantara jaringan (network infrastructure/intermediary devices). Sementara itu, Handphone, Laptop, dan PC diklasifikasikan sebagai perangkat akhir (end devices / host)."
    },
    {
        "no": 27,
        "q": "Yang termasuk Jenis Jaringan Komputer Berdasarkan Distribusi Informasi atau Data yaitu ...",
        "opts": [
            "a. Jaringan Terdistribusi dan Jaringan Terpusat",
            "b. Jaringan Terdistribusi dan Jaringan Client Server",
            "c. Jaringan Terpusat dan Peer To Peer",
            "d. Jaringan Peer to Peer dan Jaringan Client Server"
        ],
        "ans": "a. Jaringan Terdistribusi dan Jaringan Terpusat",
        "exp": "Berdasarkan distribusi aliran data dan proses pengolahan informasi, jaringan diklasifikasikan menjadi dua: Jaringan Terpusat (Centralized Network, semua pemrosesan data di server tunggal/host) dan Jaringan Terdistribusi (Distributed Network, gabungan beberapa server otonom yang saling terhubung)."
    },
    {
        "no": 28,
        "q": "Apa fungsi dari perangkat Dude?",
        "opts": ["a. Memperkuat sinyal", "b. Menghubungkan perangkat jaringan", "c. Memantau jaringan", "d. Simulasi jaringan"],
        "ans": "c. Memantau jaringan",
        "exp": "'The Dude' adalah aplikasi perangkat lunak Network Monitoring System (NMS) yang dikembangkan oleh MikroTik. Fungsinya adalah memindai perangkat di jaringan secara otomatis, memetakan topologi, dan memantau status link serta layanan (ping, port, bandwidth, outage) secara real-time."
    },
    {
        "no": 29,
        "q": "Salah satu perintah yang digunakan untuk menguji koneksi antar komputer adalah...",
        "opts": ["a. PONG", "b. IP Address", "c. PING", "d. IPCONFIG"],
        "ans": "c. PING",
        "exp": "PING (Packet Internet Groper) adalah utilitas baris perintah yang memanfaatkan paket ICMP Echo Request untuk menguji konektivitas end-to-end, mengukur waktu bolak-balik (Round Trip Time / RTT), dan mendeteksi packet loss antar perangkat jaringan."
    },
    {
        "no": 30,
        "q": "Routing dinamis lebih diutamakan di jaringan:",
        "opts": [
            "a. Dengan satu jalur komunikasi",
            "b. Dengan banyak perubahan topologi",
            "c. Tanpa koneksi internet",
            "d. Dengan topologi tetap"
        ],
        "ans": "b. Dengan banyak perubahan topologi",
        "exp": "Routing dinamis (OSPF, EIGRP, BGP) diutamakan pada jaringan besar dengan topologi yang sering berubah atau memiliki banyak jalur redundan, karena protokol routing secara otomatis bertukar informasi tabel routing dan mengalihkan paket saat jalur utama terputus tanpa konfigurasi manual administrator."
    },
    {
        "no": 31,
        "q": "Bagaimana subnet mask 255.255.255.0 diubah menjadi 255.255.255.192 mempengaruhi jaringan?",
        "opts": [
            "a. Menambah jumlah host",
            "b. Mengurangi jumlah subnet",
            "c. Membagi jaringan menjadi lebih banyak subnet",
            "d. Tidak ada pengaruh"
        ],
        "ans": "c. Membagi jaringan menjadi lebih banyak subnet",
        "exp": "Mengubah subnet mask dari /24 (255.255.255.0) ke /26 (255.255.255.192) meminjam 2 bit dari host id menjadi network bit (2^2 = 4 subnet). Hal ini membagi jaringan awal menjadi 4 subnet baru dengan konsekuensi kapasitas host per subnet berkurang dari 254 menjadi 62 host."
    },
    {
        "no": 32,
        "q": "Apa yang dilakukan Optical Power Meter (OPM) dalam pengujian fiber optic?",
        "opts": ["a. Memotong core serat optik", "b. Menyambungkan serat optik", "c. Mengukur redaman cahaya", "d. Mengukur kekuatan sinyal optik"],
        "ans": "d. Mengukur kekuatan sinyal optik",
        "exp": "OPM (Optical Power Meter) adalah alat uji fotometrik khusus serat optik yang berfungsi mengukur daya mutlak (absolute power) atau kekuatan sinyal cahaya yang diterima pada panjang gelombang tertentu (850nm, 1310nm, 1550nm) dalam satuan dBm atau milliwatt."
    },
    {
        "no": 33,
        "q": "Perangkat apa yang berfungsi untuk memperkuat sinyal jaringan?",
        "opts": ["a. Bridge", "b. Repeater", "c. Switch", "d. Router"],
        "ans": "b. Repeater",
        "exp": "Repeater bekerja pada Layer 1 (Physical Layer) model OSI. Fungsinya adalah meregenerasi sinyal listrik atau optik yang mengalami redaman (attenuation) akibat jarak tempuh kabel yang panjang, sehingga sinyal kembali kuat dan dapat diteruskan lebih jauh."
    },
    {
        "no": 34,
        "q": "Alamat IP mana yang termasuk dalam kelas B?",
        "opts": ["a. 150.100.1.1", "b. 172.16.0.1", "c. 10.0.0.1", "d. 192.168.1.1"],
        "ans": "b. 172.16.0.1",
        "exp": "Format kelas alamat IPv4 ditentukan oleh nilai oktet pertama: Kelas B berada di rentang 128 s.d. 191. Alamat 172.16.0.1 (serta 150.100.1.1) secara arsitektur berada pada rentang Kelas B. Alamat 172.16.0.1 merupakan representasi klasik blok IP Privat Kelas B (172.16.0.0 – 172.31.255.255)."
    },
    {
        "no": 35,
        "q": "Alamat IP 10.0.0.1 termasuk dalam kelas mana?",
        "opts": ["a. Kelas A", "b. Kelas D", "c. Kelas C", "d. Kelas B"],
        "ans": "a. Kelas A",
        "exp": "Alamat IP dengan oktet pertama bernilai 1 s.d. 126 termasuk dalam Kelas A (bit awal selalu biner 0). Alamat 10.0.0.1 berada di dalam blok 10.0.0.0/8 yang dikhususkan sebagai IP Privat Kelas A."
    },
    {
        "no": 36,
        "q": "Apa yang dimaksud dengan next-hop dalam routing?",
        "opts": [
            "a. Jaringan tujuan",
            "b. Router yang akan dilewati selanjutnya",
            "c. Router pertama yang menerima paket",
            "d. Router terakhir sebelum tujuan"
        ],
        "ans": "b. Router yang akan dilewati selanjutnya",
        "exp": "Dalam tabel routing (routing table), 'next-hop' mendefinisikan alamat IP antarmuka gerbang (gateway interface) dari router tetangga berikutnya yang harus dituju oleh paket data dalam perjalanannya menuju subnet destinasi akhir."
    },
    {
        "no": 37,
        "q": "Pada metode transmisi Baseband, data yang dikirimkan berupa:",
        "opts": ["a. Sinyal gelombang mikro", "b. Sinyal digital langsung", "c. Sinyal modulasi frekuensi", "d. Sinyal analog"],
        "ans": "b. Sinyal digital langsung",
        "exp": "Transmisi Baseband mengirimkan sinyal pulsa digital langsung (berupa diskrit level tegangan 0 dan 1) ke media kabel tanpa menggunakan modulasi sinyal pembawa frekuensi tinggi analog (seperti pada Ethernet Base-T)."
    },
    {
        "no": 38,
        "q": "Apa perbedaan utama antara RIP dan OSPF?",
        "opts": [
            "a. RIP bekerja lebih cepat dibandingkan OSPF",
            "b. OSPF tidak mendukung routing dinamis",
            "c. OSPF mendukung jaringan kecil, RIP mendukung jaringan besar",
            "d. RIP menggunakan hop count, OSPF menggunakan metric berdasarkan cost"
        ],
        "ans": "d. RIP menggunakan hop count, OSPF menggunakan metric berdasarkan cost",
        "exp": "RIP (Routing Information Protocol) bertipe Distance Vector dan hanya menggunakan metrik sederhana berupa jumlah lompatan (hop count, maksimal 15). Sementara OSPF (Open Shortest Path First) bertipe Link-State yang menghitung metrik jalur terbaik berdasarkan Cost (dihitung proporsional dari bandwidth antarmuka / 10^8 / bandwidth)."
    },
    {
        "no": 39,
        "q": "Salah satu fungsi dari jenis sambungan kabel CROSS adalah...",
        "opts": [
            "a. Menghubungkan dua perangkat jaringan yang sejenis",
            "b. Menghubungkan dua perangkat jaringan yang berbeda jenis",
            "c. Menghubungkan jaringan komputer yang berbeda",
            "d. Mengkonfigurasi peralatan jaringan model CISCO"
        ],
        "ans": "a. Menghubungkan dua perangkat jaringan yang sejenis",
        "exp": "Kabel UTP crossover menghubungkan pin transmit (Tx) ke receive (Rx) secara menyilang, sehingga fungsi utamanya adalah menghubungkan dua perangkat jaringan yang setara atau sejenis secara peer-to-peer tanpa perantara switch (misal PC ke PC, Switch ke Switch, Router ke Router)."
    },
    {
        "no": 40,
        "q": "Dalam metode akses jaringan CSMA/CD, apa yang terjadi jika terjadi collision?",
        "opts": [
            "a. Data dikirim ulang setelah jeda acak",
            "b. Token diberikan ke simpul lain",
            "c. Data diteruskan dengan prioritas tinggi",
            "d. Jaringan akan mati"
        ],
        "ans": "a. Data dikirim ulang setelah jeda acak",
        "exp": "Pada metode akses media CSMA/CD (Carrier Sense Multiple Access with Collision Detection), apabila dua stasiun mengirim data secara bersamaan dan terjadi tabrakan sinyal (collision), kedua stasiun akan menyiarkan sinyal jam, menghentikan transmisi, dan menunggu selama interval waktu jeda acak (random backoff delay) sebelum mencoba mentransmisikan ulang paketnya."
    }
]

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=A4,
    leftMargin=2.54 * cm,
    rightMargin=2.54 * cm,
    topMargin=2.54 * cm,
    bottomMargin=2.54 * cm
)

styles = getSampleStyleSheet()

# Custom Academic Styles
s_inst = ParagraphStyle(
    "InstHeader",
    fontName="Times-Bold",
    fontSize=11,
    leading=14,
    alignment=1, # Center
    textColor=colors.HexColor("#0B2545")
)
s_title = ParagraphStyle(
    "DocTitle",
    fontName="Times-Bold",
    fontSize=13,
    leading=16,
    alignment=1,
    spaceAfter=4,
    textColor=colors.HexColor("#000000")
)
s_meta = ParagraphStyle(
    "MetaText",
    fontName="Times-Roman",
    fontSize=10,
    leading=13,
    textColor=colors.HexColor("#333333")
)
s_meta_bold = ParagraphStyle(
    "MetaTextBold",
    fontName="Times-Bold",
    fontSize=10,
    leading=13,
    textColor=colors.HexColor("#111111")
)

s_h2 = ParagraphStyle(
    "Heading2Custom",
    fontName="Times-Bold",
    fontSize=11.5,
    leading=15,
    spaceBefore=10,
    spaceAfter=4,
    textColor=colors.HexColor("#0B2545")
)

s_qtext = ParagraphStyle(
    "QuestionText",
    fontName="Times-Bold",
    fontSize=10.5,
    leading=14,
    textColor=colors.HexColor("#111111")
)
s_opt = ParagraphStyle(
    "OptionText",
    fontName="Times-Roman",
    fontSize=9.5,
    leading=13,
    leftIndent=12,
    textColor=colors.HexColor("#333333")
)
s_opt_correct = ParagraphStyle(
    "OptionCorrectText",
    fontName="Times-Bold",
    fontSize=9.5,
    leading=13,
    leftIndent=12,
    textColor=colors.HexColor("#0B6E28")
)
s_exp = ParagraphStyle(
    "ExplainText",
    fontName="Times-Roman",
    fontSize=9.5,
    leading=13.5,
    leftIndent=12,
    textColor=colors.HexColor("#222222")
)

s_tbl_cell = ParagraphStyle(
    "TblCell",
    fontName="Times-Roman",
    fontSize=8.5,
    leading=11,
    alignment=1
)
s_tbl_cell_bold = ParagraphStyle(
    "TblCellBold",
    fontName="Times-Bold",
    fontSize=8.5,
    leading=11,
    alignment=1
)

story = []

# 1. Header Ringkas Lembaga & Identitas Mahasiswa (Mode Jawaban Biasa Formal ITG)
story.append(Paragraph("INSTITUT TEKNOLOGI GARUT", s_inst))
story.append(Paragraph("FAKULTAS ILMU KOMPUTER • PROGRAM STUDI S1 TEKNIK INFORMATIKA", ParagraphStyle("SubInst", fontName="Times-Roman", fontSize=9.5, leading=12, alignment=1, textColor=colors.HexColor("#444444"))))
story.append(Spacer(1, 4 * mm))
story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor("#0B2545"), spaceAfter=8))

story.append(Paragraph("LEMBAR JAWABAN & PEMBAHASAN AKADEMIK KUIS PRA UTS", s_title))
story.append(Paragraph("MATA KULIAH: JARINGAN KOMPUTER (KELAS IF-2025 C)", ParagraphStyle("SubTitleCourse", fontName="Times-Bold", fontSize=10.5, leading=13, alignment=1, textColor=colors.HexColor("#222222"))))
story.append(Spacer(1, 3 * mm))

# Meta Table
meta_data = [
    [Paragraph("<b>Nama Mahasiswa</b>", s_meta), Paragraph(": Nesya Rahma", s_meta_bold),
     Paragraph("<b>Mata Kuliah</b>", s_meta), Paragraph(": Jaringan Komputer (3 SKS)", s_meta_bold)],
    [Paragraph("<b>NIM</b>", s_meta), Paragraph(": 2506068", s_meta_bold),
     Paragraph("<b>Dosen Pengampu</b>", s_meta), Paragraph(": Dr. Dede Kurniadi, S.Kom., M.Kom.", s_meta_bold)],
    [Paragraph("<b>Kelas / Semester</b>", s_meta), Paragraph(": IF-2025 C / Semester 3", s_meta_bold),
     Paragraph("<b>Platform Ujian</b>", s_meta), Paragraph(": ITG LMS Moodle (CMID: 428)", s_meta_bold)]
]
t_meta = Table(meta_data, colWidths=[3.2 * cm, 4.8 * cm, 3.2 * cm, 4.7 * cm])
t_meta.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 1.5 * mm),
    ('TOPPADDING', (0,0), (-1,-1), 1.5 * mm),
    ('LEFTPADDING', (0,0), (-1,-1), 1 * mm),
    ('RIGHTPADDING', (0,0), (-1,-1), 1 * mm),
    ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#F8FAFC")),
    ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor("#CBD5E1")),
    ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor("#E2E8F0")),
]))
story.append(t_meta)
story.append(Spacer(1, 5 * mm))

# 2. Rekapitulasi Kunci Jawaban Soal 1 s.d. 40
story.append(Paragraph("A. TABEL REKAPITULASI KUNCI JAWABAN (SOAL 1 s.d. 40)", s_h2))

# 4 columns of (No, Jawaban) -> 10 rows per column set
rekap_header = [
    Paragraph("<b>No</b>", s_tbl_cell_bold), Paragraph("<b>Kunci</b>", s_tbl_cell_bold),
    Paragraph("<b>No</b>", s_tbl_cell_bold), Paragraph("<b>Kunci</b>", s_tbl_cell_bold),
    Paragraph("<b>No</b>", s_tbl_cell_bold), Paragraph("<b>Kunci</b>", s_tbl_cell_bold),
    Paragraph("<b>No</b>", s_tbl_cell_bold), Paragraph("<b>Kunci</b>", s_tbl_cell_bold)
]
rekap_rows = [rekap_header]
for r in range(10):
    row_data = []
    for c in range(4):
        q_idx = r + (c * 10) # 0..9, 10..19, 20..29, 30..39
        q_item = questions[q_idx]
        ans_letter = q_item["ans"].split(".")[0].strip().upper()
        row_data.append(Paragraph(str(q_item["no"]), s_tbl_cell_bold))
        row_data.append(Paragraph(f"<b>{ans_letter}</b>", s_tbl_cell))
    rekap_rows.append(row_data)

t_rekap = Table(rekap_rows, colWidths=[1.1 * cm, 2.8 * cm, 1.1 * cm, 2.8 * cm, 1.1 * cm, 2.8 * cm, 1.1 * cm, 2.8 * cm])
t_rekap.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#0B2545")),
    ('TEXTCOLOR', (0,0), (-1,0), colors.white),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 1.2 * mm),
    ('TOPPADDING', (0,0), (-1,-1), 1.2 * mm),
    ('LEFTPADDING', (0,0), (-1,-1), 1 * mm),
    ('RIGHTPADDING', (0,0), (-1,-1), 1 * mm),
    ('BOX', (0,0), (-1,-1), 0.5, colors.HexColor("#000000")),
    ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor("#CCCCCC")),
]))
story.append(t_rekap)
story.append(Spacer(1, 6 * mm))

# 3. Pembahasan Lengkap Per Butir Soal (1 s.d. 40)
story.append(Paragraph("B. PEMBAHASAN LENGKAP & ANALISIS ILMIAH SETIAP SOAL", s_h2))
story.append(Spacer(1, 2 * mm))

for q in questions:
    q_story = []
    # Question Header & Text
    q_story.append(Paragraph(f"<b>Soal Nomor {q['no']}</b>", ParagraphStyle("QNum", fontName="Times-Bold", fontSize=10.5, leading=14, textColor=colors.HexColor("#0B2545"))))
    q_story.append(Paragraph(q["q"], s_qtext))
    q_story.append(Spacer(1, 1.5 * mm))
    
    # Options
    for opt in q["opts"]:
        is_ans = opt.startswith(q["ans"][:2])
        if is_ans:
            q_story.append(Paragraph(f"<b>[✓] {opt}</b>", s_opt_correct))
        else:
            q_story.append(Paragraph(f"[  ] {opt}", s_opt))
            
    q_story.append(Spacer(1, 2 * mm))
    # Explanation
    q_story.append(Paragraph(f"<b>Kunci Jawaban: {q['ans']}</b>", ParagraphStyle("AnsLabel", fontName="Times-Bold", fontSize=9.5, leading=13, textColor=colors.HexColor("#0B6E28"))))
    q_story.append(Paragraph(f"<b>Dasar Teori & Pembahasan:</b> {q['exp']}", s_exp))
    q_story.append(Spacer(1, 3.5 * mm))
    q_story.append(HRFlowable(width="100%", thickness=0.4, color=colors.HexColor("#E2E8F0"), spaceAfter=4))
    
    story.append(KeepTogether(q_story))

# Build Document
doc.build(story, canvasmaker=NumberedCanvas)
print("PDF generated successfully:", pdf_path)
print("File size:", os.path.getsize(pdf_path), "bytes")
