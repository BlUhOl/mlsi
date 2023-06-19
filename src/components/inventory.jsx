import React from 'react';
import data from './data.json';
import { useState, Fragment } from 'react';
import { nanoid } from 'nanoid';

const Inventorytable = () => {
    const [invntry, setInvntry] = useState(data);
    

    //menerima input dari field form
    const [addtabledata, setAddtabledata] = useState({
        id:"",
        namaobat:"",
        harga:"",
        stok:""
    })

    //menerima data ketika terjadi event perubahan realtime
    const handleAddTableChange = (event) => {
        //menolak post request
        event.preventDefault();
        
        //mendapatkan input atribut name yang berubah
        const fieldname = event.target.getAttribute('name');
        //mendapatkan input atribut value
        const fieldvalue = event.target.value;
        
        //menyalin input data form
        const newTableData = { ...addtabledata};
        newTableData[fieldname] = fieldvalue;
        
        //pass new data to newtabledata
        setAddtabledata(newTableData);
    };

    const handleAddTableSubmit = (event) => {
        //menolak post request
        event.preventDefault();

        const newTable = {
            rowid: nanoid(),
            id: addtabledata.id,
            namaobat: addtabledata.namaobat,
            harga: addtabledata.harga,
            stok: addtabledata.stok
        }

        const newTables = [...invntry, newTable];
        setInvntry(newTables)
    }

  return (
    <main>
    
        <div>
            <table className=''>
                <thead className='bg-blue-100'>
                <tr>
                    <th>Id</th>
                    <th>Nama Obat</th>
                    <th>Harga Jual</th>
                    <th>Stok</th>
                </tr>
                </thead>
                <tbody>
                {invntry.map((inventory) => (
                    <tr>
                    <td>{inventory.id}</td>
                    <td>{inventory.namaobat}</td>
                    <td>{inventory.harga}</td>
                    <td>{inventory.stok}</td>
                    </tr>
                ))}
                
                </tbody>
            </table>

            <h3>Tambahkan Obat baru</h3>
            <form
            onSubmit={handleAddTableSubmit}>
                <input 
                    type="number"
                    name="id"
                    required="required"
                    placeholder="id.."
                    onChange={handleAddTableChange}
                    />
                <input 
                    type="text"
                    name="namaobat"
                    required="required"
                    placeholder="obat.."
                    onChange={handleAddTableChange}
                    />
                <input 
                    type="text"
                    name="harga"
                    required="required"
                    placeholder="harga.."
                    onChange={handleAddTableChange}
                    />
                <input 
                    type="number"
                    name="stok"
                    required="required"
                    placeholder="stok.."
                    onChange={handleAddTableChange}
                    />
                    <button type="submit">Add</button>
            </form>

        </div>
    </main>
  )
}

export default Inventorytable