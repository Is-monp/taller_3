import Counter from "./Counter";

function CounterSection() {
    return (
        <section className="counter-section">
            <div className="counter-section__content">
                <h2 className="counter-section__title">¿Cuantos estudiantes van a inscribirse?</h2>
                <p className="counter-section__subtitle">Usa los botones para ajustar el número de</p>
                <Counter />
                <p className="counter-section__subtitle">estudiantes inscritos</p>
            </div>
        </section>
    );
}

export default CounterSection;