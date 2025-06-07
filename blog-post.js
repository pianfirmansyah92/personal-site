// data/blog-posts.js
const blogPosts = [
  {
    id: "project-brief",
    title: "Mahamin Project Brief Nggak Harus Ribet (Tapi Jangan Ngasal Juga)",
    description: "Sering banget nemu brief yang keliatannya jelas, tapi ternyata butuh digali lagi. Di sini, saya coba share gimana proses saya mahaminnya",
    cover: "images/blog/blog-project-brief.jpg",
    tags: ["UX", "Brief", "Requirement"],
    date: "2024-06-05",
    content: `
      <p>Kalau kalian kerja di dunia desain atau produk, pasti pernah dapet project brief yang bunyinya kayak gini :</p>
      <blockquote><em>"Tolong Redesign halaman ini biar lebih modern dan bagus."</em><br />
      <em>"Tambahin fitur search biar user gak susah cari sesuatu."</em></blockquote>
      <br />
      <p>Tapi… kadang brief kayak gini malah bikin bingung:</p>
      <p><b>"Sebenernya, yang harus dikerjainnya apa ya? apa cuman redesign halaman ini aja? terus fitur search ini untuk apa kan webnya cuma landing page? hmmm"</b></p>
      <br />
      <p>Sering banget nemu brief yang keliatannya jelas, tapi ternyata butuh digali lagi. Disini, saya coba share gimana proses saya memahami brief, ngebagi-bagiin jadi backlog atau user story, dan nemuin titik tengah antara harapan klien sama realita user. Yuk disimak</p>
      <hr class="my-4" />
      <h3>1. Mulai dari siapin Pertanyaan yang Bener</h3>
      <p>Brief itu cuma awal. Kita harus gali lebih dalam biar ngerti masalah sebenarnya.</p>
      <p>Tiap perusahaan punya cara beda-beda dalam nyusun brief. Di perusahaan besar, biasanya atau harusnya mereka bakal kasih dokumen-dokumen seperti ini:</p>
      <ul class="my-2">
        <li><p><b>BRD</b> (Business Requirements Document): isinya biasanya lengkap banget ada tujuan bisnis, flow kerja, kebutuhan user, sampai stakeholder yang terlibat.</p></li>
        <li><p><b>URS</b> (User Requirement Specification): Fokus ke kebutuhan user dari sistem. Ini penting banget buat sistem yang kompleks, kayak ERP, aplikasi medical, atau otomasi pabrik.</p></li>
        <li><p><b>FSD</b> (Functional Specification Document): lebih teknis, biasanya udah masuk ke fitur-fitur dan cara kerja sistem.</p></li>
        <li><p><b>Design Brief</b>: kadang fokus di branding dan visual guideline, bukan ke kebutuhan fungsional.</p></li>
        <li><p><b>RFP</b> (Request for Proposal): ini lebih umum di proyek B2B, isinya permintaan resmi buat penawaran desain atau dev.</p></li>
      </ul>
      <p>Tapi kadang, kita juga dapet <b>brief yang super singkat</b> cuma satu atau dua paragraf, contoh :<p>
      <blockquote>“Kita butuh halaman landing baru buat campaign bulan depan. Harus clean, modern, dan konversinya bagus.”</blockquote>
      <p>Nah, tipe brief yang kedua ini yang justru paling tricky. Karena banyak hal penting yang belum ditulis dimulai dari siapa target usernya, campaign-nya buat apa, kontennya siapa yang nyiapin, dsb. Di sinilah pentingnya kita aktif nanya dan ngegali info lebih dalam.<p>
      <br />
      <p>Coba ubah pernyataan umum kayak gini:</p>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>yang di tulis dibrief</th>
            <th>yang harus kamu tanya</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>“User bingung pake dashboard”</td>
            <td>Bagian mana yang bikin bingung? Akses datanya? Navigasinya? </td>
          </tr>
          <tr>
            <td>“Tolong bikin UI-nya modern dan bagus”</td>
            <td>Maksudnya modern itu clean, flat, atau dark mode? UI bagus ini ada referensi? atau cari tahu yang bagus menurut klien itu seperti apa?</td>
          </tr>
          <tr>
            <td>“Tambah fitur search”</td>
            <td>Siapa yang pakai? Buat nyari data apa? Sering dipake atau enggak? Perlu ada filter juga gak?</td>
          </tr>
        <tbody>
      </table>
      <p>Dengan pertanyaan yang pas, kita bisa nemuin celah atau kebutuhan yang belum disampaikan secara eksplisit. Kalo cara menggalinya bener celah ini pasti ketemu. Mau sedetail dokumen <b>BRD</b> atau <b>URS</b> pasti ada celahnya juga jadi gak boleh lengah kalo gak mau banyak revisi.</p>
      <hr class="my-4" />

      <h3>2. Ubah Jadi Design Backlog atau User Story</h3>
      <p>Setelah ngerti masalahnya, jangan langsung buka Figma.</p>
      <center><img src="images/blog/insideBlog-image-brief.jpg" alt="Project Brief for Designer" class="my-2" /></center>
      <p>Coba ubah brief tadi jadi <b>Desain Backlog</b> alias daftar hal yang perlu dieksplor, ditanya, dan dicoba. Atau bisa juga jadi <b>User Story</b> dimana ini jadi acuan setiap aktivitas end-user saat lagi pake sistem atau aplikasinya.</p>
      <p>Contoh:</p>
      <blockquote>❌ Brief: “Redesign halaman dashboard”<br />
      ✅ Backlog: "Cari tahu alur kerja user saat ngelihat data pengiriman. Temuin titik yang bikin mereka stuck. Coba dua ide layout dan uji mana yang paling cepat dipahami."</blockquote>
      <blockquote>❌ Brief: “Pengguna dapat daftar ke Sistem”<br />
      ✅ User Story: "Pengguna daftar sistem menggunakan alamat email atau no handphone, dilanjutkan dengan input OTP lalu ke langkah terakhir untuk input data pribadi dan kata sandi"</blockquote>
      <p>Dengan format ini, kerjaan kita jadi lebih jelas arahnya. Bukan cuma “gambar doang,” tapi coba cari solusi untuk nyelesain masalahnya juga.</p>
      <hr class="my-4" />
      
      <h3>3. Stakeholder Inginnya A, tapi User Butuhnya B</h3>
      <p>Ini sering banget kejadian: stakeholder pengen semua data lengkap, user pengen semuanya cepet. terus Gimana caranya biar dua-duanya dapet win-win?</p>
      <center><img src="images/blog/insideBlog-image-stakeholder-user.png" alt="Stakeholder vs User" class="my-2" /></center>
      <p>Di sinilah pentingnya peran desainer jadi <b>penjembatan antara kebutuhan bisnis dan kenyamanan user.</b> Jangan malah didebatin dengan statement “user butuhnya gini harusnya stakeholder yang nyesuain” atau bisa juga sebaliknya. Nah ini gak boleh ya guys ya..</p>
      <p>Contohnya:</p>
      <blockquote><b>Marketing:</b> “Kita butuh data email + nomor WA buat prospek.” <br />
      <b>User:</b> “Gue belum yakin mau lanjut, kenapa langsung diminta data?”</blockquote>
      <p>Solusinya apa?<br />
      Gak harus pilih salah satu coba cari titik temu antara tujuan bisnis dan kebutuhan user.</p>
      <p>Misalnya:</p>
      <ul class="my-2">
        <li><p>Tampilkan form data <b>setelah user coba fitur utama</b></p></li>
        <li><p>Kasih opsi <b>"Skip”</b>, biar user bisa coba dulu</p></li>
        <li><p>Jelaskan <b>benefitnya</b>, biar user ngerti kenapa data itu diminta.</p></li>
      </ul>
      <hr class="my-4" />
      
      <h3>5. Penutup: Brief Itu Titik Start, Bukan Final Answer</h3>
      <p>Banyak desainer langsung loncat ke desain, padahal brief itu baru persiapan buat langkah awal.</p>
      <p>Yang penting ketika kalian dapet brief project:</p>      
      <ul class="my-2">
        <li><p>Jangan takut kalo harus nanya ulang (asal sopan 😄)</p></li>
        <li><p>Ubah permintaan jadi masalah desain yang bisa diuji</p></li>
        <li><p>Selalu cari titik temu antara keinginan bisnis & kebutuhan user</p></li>
      </ul>
      <p>Cara mikir kayak gini bikin kalian gak cuma bikin visual doang, tapi beneran ngasih value buat produk.</p>
      <center><img src="images/blog/insideBlog-image-project-brief-quotes.png" alt="Project Brief Qoutes" class="my-2" /></center>
      <hr class="my-4" />
      <p>Kalau kalian udah sampai sini mantappp, berarti kalian bukan tipe desainer yang cuma nunggu disuruh. Tapi kalian pengen ngerti juga kenapa harus ngerjain sesuatu, dan itu modal penting biar bisa naik level. Share tulisan ini ke temen kalian jika bermanfaat atau kalo ada yang masih bingung cara mahamin project brief yuk diskusi.</p>
    `
  },
  {
    id: "Sample-Blog",
    title: "Test Title Blog",
    description: "Why a quick UX audit can uncover hidden blockers in early product development.",
    cover: "images/blog/blog-project-brief.jpg",
    tags: ["UX", "Audit"],
    date: "2024-06-08"
  }
];
