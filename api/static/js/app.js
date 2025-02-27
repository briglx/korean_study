function App() {
    const [message, setMessage] = React.useState("Click the button to fetch data!");

    const fetchData = async () => {
        try {
            const response = await fetch('/api/data');
            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div class="flex flex-col items-center  p-7 rounded-2x1">
            {/* Header */}
            <div class="flex items-center md:items-start">
                <span class="text-2x1 font-medium">Packs</span>
                <span>1/20</span>
            </div>

            {/* Pack Detail */}
            <div>
                <div>Common Words</div>
                <div>Easy</div>
                <div>20 words</div>
                <span>
                    <span><span>22</span><span>learned words</span></span>
                    <span><span>3</span><span>mastered words</span></span>
                    <span><span></span><span>Test Available</span></span>

                </span>
            </div>

            {/* Bottom row */}
            <div>
                <button className="btn btn-primary px-4 py-2" onClick={fetchData}>Packs</button>
                <button className="btn btn-primary px-4 py-2">You</button>
                <p className="mt-3 text-lg font-semibold">{message}</p>
            </div>
        </div>
    );
}

// Render React App
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
