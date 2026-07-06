import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Report from "../components/Report";
import API from "../services/api";

import "../css/History.css";

function History() {

    const [history, setHistory] = useState([]);
    const [selectedReport, setSelectedReport] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchHistory();

    }, []);

    const fetchHistory = async () => {

        try {

            const token = localStorage.getItem("access");

            const response = await API.get(

                "/history/",

                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }

            );

            setHistory(response.data);

        }

        catch (error) {

            console.log(error);

            alert("Unable to load history.");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <>

            <Navbar />

            <section className="history-page">

                <h1>Analysis History</h1>

                <p className="history-subtitle">

                    View every bug you have analyzed.

                </p>

                {

                    loading ?

                        <h2>Loading...</h2>

                        :

                        history.length === 0 ?

                            <h2>No analyses found.</h2>

                            :

                            history.map((item) => (

                                <div
                                    className="history-card"
                                    key={item.id}
                                >

                                    <div className="history-top">

                                        <div>

                                            <h3>

                                                {item.language} • {item.framework}

                                            </h3>

                                            <small>

                                                {new Date(
                                                    item.created_at
                                                ).toLocaleString()}

                                            </small>

                                        </div>

                                    </div>

                                    <div className="history-error">

                                        <strong>Error</strong>

                                        <p>{item.error}</p>

                                    </div>

                                    <button

                                        className="view-report-btn"

                                        onClick={() =>

                                            setSelectedReport(item.report)

                                        }

                                    >

                                        View AI Report

                                    </button>

                                </div>

                            ))

                }

                {

                    selectedReport &&

                    <>

                        <hr />

                        <Report report={selectedReport} />
                    </>

                }

            </section>

            <Footer />

        </>

    );

}

export default History;