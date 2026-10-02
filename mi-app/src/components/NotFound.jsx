import { Link } from "react-router";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__content">
        <p className="not-found__code">404</p>

        <h1 className="not-found__title">
          Página no encontrada
        </h1>

        <p className="not-found__subtitle">
          La página que estás buscando no existe o puede haber sido movida.
        </p>

        <Link to="/" className="not-found__button">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}