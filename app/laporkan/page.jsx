"use client"
import './style.css';
import { UserAuth } from "../context/AuthContext";
import { db } from '../firebase';
import { ref, get, child, onValue, set, push, update } from 'firebase/database';
import Swal from 'sweetalert2';
import { useState } from 'react';

export default function Laporkan() {
    const { user, googleSignIn, logOut, vote } = UserAuth();
    const { reportStatus, setReportStatus } = useState(false);
    const date = String(new Date().toISOString().slice(0,11).replace(/-/g,""));

    const handleReport = (subject, details) => {
        document.getElementById("laporan").reset();
        try {
            const reportDB = ref(db, '/laporan/' + date + '/' + user.uid);
            get(reportDB).then((snapshot) => {
                if(snapshot.exists()) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Laporan Anda Sudah Diajukan',
                        text: 'Laporan Anda hari ini sudah diajukan, mohon tunggu untuk proses selanjutnya',
                        footer: 'Demi kenyamanan, laporan dibatasi satu per hari per akun'
                    })
                } else {
                    set(reportDB, {"subject": subject, "details": details});

                    Swal.fire({
                        icon: 'success',
                        title: 'Berhasil Mengajukan Laporan',
                        text: 'Laporan berhsail diajukan, mohon menunggu tindak lanjut dari pihak KPU',
                        footer: 'Demi kenyamanan, laporan dibatasi satu per hari per akun'
                    })
                }
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal Mengajukan Laporan',
                text: 'Mohon login terlebih dahulu untuk mengajukan laporan',
                footer: 'Demi kenyamanan, laporan dibatasi satu per hari per akun'
            })
        }
    }

    return (
        <>
            <div class="page-wrapper p-t-100 p-b-50">
            <div class="wrapper wrapper--w900">
            <div class="card card-6">
            <div class="card-heading">
            <h2 class="titles gotham">AJUKAN LAPORAN</h2>
            </div>
            <div class="card-body">
            <form id="laporan" method="POST">
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
            <textarea class="textarea--style-6" name="details" placeholder="detail lengkap terkait laporan, usahakan mencakup seluruh informasi yang anda ketahui. apabila terdapat bukti yang ingin diajukan, sertakan pranala penyimpanan awan yang mengandung bukti yang sesuai."></textarea>
            </div>
            </div>
            </div>
            </form>
            </div>
            <div class="card-footer">
            <button class="btn btn--radius-2 btn--blue-2" type="submit" onClick={() => handleReport(document.getElementsByName("subject")[0].value, document.getElementsByName("details")[0].value)}>Ajukan Laporan</button>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}