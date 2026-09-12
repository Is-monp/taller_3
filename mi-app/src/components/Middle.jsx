import Card from "./Card";

function Middle() {
    const courses = [
        {
            icon: "⚛️",
            title: "React Básico",
            desc: "Componentes, props, state y eventos. Todo lo que necesitas para empezar.",
            level: "Principiante",
        },
        {
            icon: "🪝",
            title: "React Hooks",
            desc: "Profundiza en useState, useEffect, useRef y crea tus propios custom hooks.",
            level: "Intermedio",
        },
        {
            icon: "📦",
            title: "Estado Global",
            desc: "Gestiona el estado con Context API y aprende cuando usarlo.",
            level: "Intermedio",
        },
        {
            icon: "🚀",
            title: "React Avanzado",
            desc: "Rendimiento, patrones avanzados y arquitectura para proyectos grandes.",
            level: "Avanzado",
        },
    ];

    return (
        <section className="middle">
            <h2 className="middle__title">Nuestros Cursos</h2>
            <p className="middle__subtitle">Elige el camino que mejor se adapte a ti</p>
            <div className="middle__grid">
                {courses.map((course) => (
                    <Card key={course.title}{...course} />
                ))}
            </div>
        </section>
    );
}

export default Middle;