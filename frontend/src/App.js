import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'
import DataTable from './components/layout/DataTable';
import BarChart from './components/layout/BarChart';
import DonutChart from './components/layout/DonutChart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">

            <h5>Taxa de Sucessos</h5>

            <BarChart />
          </div>

          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas as Vendas</h5> 
             <DonutChart />
          </div>
        </div>
         <div className="py-3">
           <h2 className="text-primary">Todas as Vendas</h2> 

         </div>

        <DataTable />
      </div>
      <Footer />
    </div>
  );
}

export default App;
