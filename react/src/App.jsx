// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import {LineChart,Line,XAxis,YAxis,Tooltip,CartesianGrid,Legend} from "recharts"
// import {BarChart,Bar} from "recharts"
// import {PieChart,Pie,Cell} from "recharts"
// import { RadarChart,Radar,PolarGrid,PolarRadiusAxis,PolarAngleAxis } from 'recharts'
// import { ScatterChart,Scatter } from 'recharts'


// function App() {
//   const data = [
//     {name: "Jan", value: 300, profit: 144},
//     {name: "Feb", value: 100, profit: 651},
//     {name: "March", value: 800, profit: 358},
//     {name: "April", value: 400, profit: 851},
//     {name: "May", value: 250, profit: 324},
//     {name: "June", value: 700, profit: 165},
//     {name: "July", value: 120, profit: 351},
//     {name: "Aug", value: 810, profit: 145},
//     {name: "Sept", value: 500, profit: 684},
//     {name: "Oct", value: 600, profit: 894},
//     {name: "Nov", value: 330, profit: 432},
//     {name: "Dec", value: 620, profit: 945},
//   ]
//   const colors = ["red","green","orange","pink","yellow"]

//   return (
//     <>
//     <div>
//     <h2>LINE CHART</h2>
//       <LineChart width={500} height={500} data={data}>
//         <XAxis dataKey="name"/>
//         <YAxis/>
//         <CartesianGrid strokeDasharray="4 4"/>  
//         <Tooltip/>
//         <Legend/>
//         <Line type="linear" dataKey="value" stroke='red'/>
//         <Line type="linear" dataKey="profit" stroke='blue'/>
//       </LineChart>
//     </div>
//     <div>
//     <h2>BAR CHART</h2>
//       <BarChart height={500} width={500} data={data}>
//         <XAxis dataKey="name"/>
//         <YAxis/>
//         <CartesianGrid strokeDasharray="4 4"/>
//         <Tooltip/>
//         <Legend/>
//         <Bar dataKey="value" fill='red'/>
//         <Bar dataKey="profit" fill='blue'/>
//       </BarChart>
//     </div>
//     <div>
//     <h2>PIE CHART</h2>
//       <PieChart width={500} height={500}>
//               <Pie 
//               data={data}
//               cx='50%'
//               cy='50%'
//               labelLine={true}
//               label={({name,percent})=>`${name} ${(percent * 100).toFixed(0)}%`}
//               outerRadius={150}
//               fill='red'
//               dataKey='value'
//               >
//                 {data.map((entry,index)=>(
//                   <Cell key={`cell-${index}`} fill={colors[index % colors.length]}/>
//                 ))}
//               </Pie>
//               <Tooltip/>
//               <Legend/>
//             </PieChart>
//     </div>
//     <div>
//     <h2>RADAR CHART</h2>
//         <RadarChart width={500} height={500} data={data}>
//           <PolarGrid/>
//           <PolarAngleAxis dataKey='name'/>
//           <PolarRadiusAxis/>
//           <Radar dataKey='profit' stroke='yellow' fill='blue' fillOpacity={0.7}/>
//           <Radar dataKey='value' stroke='red' fill='orange' fillOpacity={0.7}/>
//         </RadarChart>
//     </div>
//     <div>
//     <h2>SCATTER CHART</h2>
//       <ScatterChart data={data} height={500} width={500}>
//         <XAxis dataKey='name'/>
//         <YAxis/>
//         <CartesianGrid/>
//         <Legend/>
//         <Tooltip/>
//         <Scatter dataKey='profit' fill='red'/>
//         <Scatter dataKey='value' fill='blue'/>
//       </ScatterChart>
//     </div>
//     </>
//   )
// }

// export default App


// import React,{useState} from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { increment, decrement, incrementByAmount, reset } from "./features/counter/counter";

// function App() {

//   const [counts,setCounts] = useState(0)

//   const count = useSelector((state)=>state.counter.value)
//   const dispatch = useDispatch()

//   const handleIncrement = () => {
//     dispatch(increment())
//   }

//   const handleDecrement = () => {
//     dispatch(decrement())
//   }

//   const handleItb = () => {
//     dispatch(incrementByAmount(Number(counts)))
//   }

//   const handleReset = () => {
//     dispatch(reset())
//   }

//   return(
//     <>
//       <p>Count: {count}</p>
//       <button onClick={handleIncrement}>+++</button><br/>
//       <button onClick={handleDecrement}>---</button><br/>
//       <input style={{padding:"10px", width:"200px"}} type="number" placeholder="Enter the increment amount" onChange={(e)=>{setCounts(e.target.value)}}/><br/>
//       <button onClick={handleItb}>ITB</button><br/>
//       <button onClick={handleReset}>RESET</button>
//     </>
//   )
// }

// export default App

import React from "react";
import FakeApi from "./Test/Practice/FakeApi";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ShowData from "./Test/Practice/ShowData";
import FormData from "./Test/Practice/FormData";

function App() {

  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/fake" element={<FakeApi/>}/>
          <Route path="/show" element={<ShowData/>}/>
          <Route path="/data" element={<FormData/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App