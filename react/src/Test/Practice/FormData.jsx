import React, { useState, useEffect } from "react";
import ShowData from "./ShowData";
import styles from "/src/Test/Practice/asset/style.module.css"

export default function FormData() {

    const [form, setForm] = useState({name: "", email: "", age: ""});

    const [tableData, setTableData] = useState([]);

    const [editIndex, setEditIndex] = useState(0);

    useEffect(() => {
        const save = JSON.parse(localStorage.getItem("users")) || [];
        setTableData(save);
    }, []);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(tableData));
    }, [tableData]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editIndex !== 0) {
            const updated = [...tableData];
            updated[editIndex] = form;
            setTableData(updated);
            setEditIndex(0);
        } else {
            setTableData([...tableData, form]);
        }

        setForm({ name: "", email: "", age: "" });
    };

    const handleDelete = (index) => {
        const filtered = tableData.filter((_, i) => i !== index);
        setTableData(filtered);
    };

    const handleEdit = (index) => {
        setForm(tableData[index]);
        setEditIndex(index);
    };

    return (
    <>
    <div className={styles.col} style={{ padding: "20px" }}>
        <div className={styles.column}>
            <h2 className={styles.head}>Enter Details</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Name" value={form.name} onChange={handleChange} required/><br/><br/>
                <input type="email" name="email" placeholder="Enter Email" value={form.email} onChange={handleChange} required/><br/><br/>
                <input type="number" name="age" placeholder="Enter Age" value={form.age} onChange={handleChange} required/><br/><br/>
                <button type="submit">{editIndex !== 0 ? "Update User" : "Add User"}</button>
            </form>
        </div>

        <ShowData data={tableData} onDelete={handleDelete} onEdit={handleEdit}
        />
    </div>
    </>
    );
}