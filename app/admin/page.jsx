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
import { DataGrid } from '@mui/x-data-grid';
import Link from "next/link";
import './style.css';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  BarElement,
);

var countData = {};
function Example() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const getVoteData = (calon) => {
    const voteCount = ref(db, 'vote/');
    get(voteCount).then((snapshot) => {
      if (snapshot.exists()) {
        countData = snapshot.val()["calon" + calon];
        console.log(countData);
        return countData;
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

    return countData;
  };
    console.log(getVoteData('A'));
    const data = {
      labels : ["Calon 1", "Calon 2", "Calon 3"],
      datasets : [
        {
          label: "Suara",
          data: [6, 19, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
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

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    

    return (
        // <>
        //     {/* Bar chart */}
        //     <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">Bar Chart</h1>
        //     <div className="w-[1100px] h-screen flex mx-auto my-auto">
        //         <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
        //             <canvas id='myChart'></canvas>
        //         </div>
        //     </div>
        // </>
        <>
        
        <header class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a class="gotham-bold navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Tetronica KMTETI 2023</a>
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
        <ul class="nav flex-column">
        <List
            sx={{ width: '100%', maxWidth: 360}}
            component="nav"
            aria-labelledby="nested-list-subheader"
            // subheader={
            //   <ListSubheader component="div" id="nested-list-subheader">
            //     Nested List Items
            //   </ListSubheader>
            // }
          >
            <ListItemButton>
              {/* <ListItemIcon>
                <SendIcon />
              </ListItemIcon> */}
              <ListItemText primary="Jumlah Mahasiswa" />
            </ListItemButton>
            <ListItemButton>
              {/* <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon> */}
              <ListItemText primary="Voted" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
              {/* <ListItemIcon>
                <InboxIcon />
              </ListItemIcon> */}
              <ListItemText primary="Detail" />
              {open ? <ExpandMore /> : <ExpandLess />}
            </ListItemButton>
            <Collapse in={!open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  {/* <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon> */}
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </ul>

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



      <div className="bg-white">
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2 gotham-bold mt-2">Data Pemilihan</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <div className="mt-1">
            Last update: {new Date().toLocaleString()}
          </div>
        </div>
      </div>

      <div className="my-4 w-100">
      <Bar data={data} width="900" height="380" options={options} />

        </div>

      <h2 className="gotham-bold mt-2">Data Pemilih</h2>
      <div className="table-responsive">
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
      </div>
    </main>

    </div>
    </>
        
    )
}

export default Example;