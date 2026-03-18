import React from "react";
import styles from "/src/Test/Practice/asset/style.module.css"

export default function ShowData({ data, onDelete, onEdit }) {
    return (
        <table className={styles.table} border="2" style={{ marginTop: "20px", width: "100%" }}>
            <thead>
                <tr className={styles.th}>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {data.length === 0 ? (
                    <tr className={styles.td}>
                        <td colSpan="4" style={{ textAlign: "center" }}>No data found</td>
                    </tr>
                ) : (data.map((item, index) => (
                    <tr className={styles.td} key={index}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.age}</td>
                        <td><button className={styles.up} onClick={() => onEdit(index)}>Update</button>
                        {" "}<button className={styles.del} onClick={() => onDelete(index)}>Delete</button></td>
                    </tr>
                    ))
                )}
            </tbody>
        </table>
    )
}