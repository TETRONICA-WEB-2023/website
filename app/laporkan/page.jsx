"use client"
import './style.css';

export default function Laporkan() {
    return (
        <>
            <div class="page-wrapper p-t-100 p-b-50">
            <div class="wrapper wrapper--w900">
            <div class="card card-6">
            <div class="card-heading">
            <h2 class="titles gotham-bold">AJUKAN LAPORAN</h2>
            </div>
            <div class="card-body">
            <form method="POST">
            <div class="form-row">
            <div class="name">Subjek</div>
            <div class="value">
            <input class="input--style-6" type="text" name="subject" placeholder='judul laporan'/>
            </div>
            </div>
            {/* <div class="form-row">
            <div class="name">Email address</div>
            <div class="value">
            <div class="input-group">
            <input class="input--style-6" type="email" name="email" placeholder="example@email.com"/>
            </div>
            </div>
            </div> */}
            <div class="form-row">
            <div class="name">Detail Laporan</div>
            <div class="value">
            <div class="input-group">
            <textarea class="textarea--style-6" name="details" placeholder="detail lengkap terkait laporan, usahakan mencakup seluruh informasi yang anda ketahui"></textarea>
            </div>
            </div>
            </div>
            <div class="form-row">
            <div class="name">Bukti</div>
            <div class="value">
            <div class="input-group js-input-file">
            <input class="input-file" type="file" name="file_bukti" id="file"/>
            <label class="label--file" for="file">Pilih bukti</label>
            <span class="input-file__info">No file chosen</span>
            </div>
            <div class="label--desc">Ajukan bukti terkait pelanggaran bila ada serta pastikan file tidak melebihi 10MB.</div>
            </div>
            </div>
            </form>
            </div>
            <div class="card-footer">
            <button class="btn btn--radius-2 btn--blue-2" type="submit">Ajukan Laporan</button>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}