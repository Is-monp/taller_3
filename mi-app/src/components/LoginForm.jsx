import { useState } from "react";
import "./LoginForm.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="login">
      <div className="login__content">
        <h1 className="login__title">
          Inicia <span className="login__title--highlight">sesión</span>
        </h1>
        <p className="login__subtitle">
          Accede para continuar con tus cursos.
        </p>

        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__field">
            <label className="login__label" htmlFor="email">
              Correo electrónico
            </label>
            <input
              className="login__input"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="tucorreo@ejemplo.com"
              value={form.email}
              onChange={handleChange}
              disabled={submitted}
              required
            />
          </div>

          <div className="login__field">
            <label className="login__label" htmlFor="password">
              Contraseña
            </label>
            <input
              className="login__input"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Tu contraseña"
              value={form.password}
              onChange={handleChange}
              disabled={submitted}
              required
            />
          </div>

          <button className="login__button" type="submit" disabled={submitted}>
            Iniciar sesión
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;