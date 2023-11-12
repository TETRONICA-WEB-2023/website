"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";
import { useEffect } from "react"
import { Bar } from "react-chartjs-2";
import { db } from '../firebase';
import { ref, get, child, onValue, set, push, update } from 'firebase/database';
import * as React from 'react';
import Link from "next/link";
import './style.css';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import xlsExport from 'xlsexport';
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  BarElement,
  ChartDataLabels,
);

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
});

function Example() {
  const [open, setOpen] = React.useState(true);
  const [voteCount, setVoteCount] = React.useState([])
  const [mahasiswa, setMahasiswa] = React.useState([])
  const [updateMahasiswa, setUpdateMahasiswa] = React.useState(new Date().toLocaleString())  

  const handleClick = () => {
    setOpen(!open);
  };

  const handleReset = () => {
    
  }

  useEffect(() => {
    var counts = ref(db, '/vote');
    (function timerVote() {
      onValue(counts, (snapshot) => {
        if(snapshot.exists()) {
          var data = [];
          Object.keys(snapshot.val()).forEach(key => {
            data.push(Object.values(snapshot.val()[key]).length);
          });
          setVoteCount(data);
        }
      });
      setTimeout(timerVote, 1000);
    })();
  }, [])
  console.log(voteCount);

  
  const data = {
    labels : ["Calon 1", "Calon 2", "Calon 3"],
    datasets : [
      {
        label: "Suara",
        data: [voteCount[0], voteCount[1], voteCount[2]],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const datapoints = ctx.chart.data.datasets[0].data
           const total = datapoints.reduce((total, datapoint) => total + datapoint, 0)
          const percentage = value / total * 100
          return percentage.toFixed(2) + "%";
        },
        color: 'black',
      }
    }
  }

  const options = {
    search: true,
    download: true,
    print: true,
    viewColumns: true,
    filter: true,
    filterType: "checkbox",
    selectableRows: "none",
    resizeableColumns: true,
    // responsive,
    // tableBodyHeight,
    // tableBodyMaxHeight
  };

  // 
  // DATATABLE
  // 
  const columns = [
    { name: 'id', label: 'ID', width: 70, options: { filter: false, sort: true } },
    { name: 'namaLengkap', label: 'Nama Lengkap', width: 300, options: { filter: false, sort: true } },
    { name: 'nim', label: 'Nomor Induk Mahasiswa', width: 200, options: { filter: false, sort: true } },
    { name: 'email', label: 'Email', width: 300, options: { filter: false, sort: true } },
    { name: 'angkatan', label: 'Angkatan', width: 100 },
    { name: 'prodi', label: 'Program Studi', width: 200 },
    { name: 'status', label: 'Status', width: 100 },
    { name: 'vote', label: 'Vote', width: 100 },
  ];

  useEffect(() => {
    var dataMahasiswa = ref(db, '/mahasiswa');
    (function timermhs() {
      onValue(dataMahasiswa, (snapshot) => {
        if(snapshot.exists()) {
          var data = [];
          Object.keys(snapshot.val()).forEach(key => {

            data.push(Object.values(snapshot.val()[key]));
          });
          setMahasiswa(data);
          setUpdateMahasiswa(new Date().toLocaleString());
        }
      });
      setTimeout(timermhs, 60000);
    })();
  }, []);  

  var rows = [];
  mahasiswa.forEach((item, index) => {
    rows.push({id: index+1, namaLengkap: item[3], nim: item[0], email: item[2], angkatan: item[1], prodi: item[4], status: item[5], vote: item[6] === 0? "Belum" : "Sudah"})
  })   

  const exportDataPemilihToXLS = () => {
    const xls = new xlsExport(rows, 'Data Pemilih');
    xls.exportToXLS('Data Pemilih_' + new Date().toString() + '.xls');
  }

    return (
        <>
        
        <header class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a class="gotham navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Tetronica KMTETI 2023</a>
          <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/> */}
          <div class="navbar-nav">
            <div class="nav-item text-nowrap">
              <a class="nav-link px-3" href="/">Home</a>
            </div>
          </div>
        </header>

      {/* <div class="container-fluid">
      <div class="row"> */}
      <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              Lists of Email
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              List of invalid attempts
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              List of Student Data
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              Final reports
            </a>
          </li>
        </ul>
      </div>
    </nav>

    {/* BODY OF DOCUMENT */}
      <div className="bg-white">
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2 gotham-bold mt-2">Data Pemilihan</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="mt-1">
            Last update: {new Date().toLocaleString()}
          </div>
        </div>
      </div>

      <div className="my-4 w-100">
      <Bar data={data} options={barOptions} width="900" height="380"/>
      </div>



      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h2 className="gotham-bold mt-2">Data Pemilih</h2>
      <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary" onClick={exportDataPemilihToXLS}>Export</button>
          </div>
          <div className="mt-1">
            Last update: {updateMahasiswa}
          </div>
        </div>
      </div>
      <div className="table-responsive">
      <div style={{ height: '70vh', width: '100%' }}>
      <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
      <MUIDataTable
        data={rows}
        columns={columns}
        options={options}
      />
      </ThemeProvider>
      </CacheProvider>
    </div>
      </div>

      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h2 className="gotham-bold mt-2">Reset Data</h2>
      <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary" onClick={exportDataPemilihToXLS}>Reset Data</button>
          </div>
        </div>
      </div>
    </main>

    </div>
    </>
        
    )
}

export default Example;