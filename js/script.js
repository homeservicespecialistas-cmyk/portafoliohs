body {
  margin: 0;
  padding: 0;
  background: #f5f5f5;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Swiper */
.swiper {
  width: 90%;
  max-width: 600px;
  height: 80vh;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1500px;
}

.content {
  width: 90%;
  background: #fcfcfc;
  border-radius: 20px;
  padding: 40px 20px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  transition: transform 0.8s ease, box-shadow 0.3s ease;
}

h2 {
  font-size: 1.8rem;
  color: #222;
  margin-bottom: 15px;
}

p {
  color: #444;
  font-size: 1rem;
}

/* Botones de navegación */
.buttons {
  position: absolute;
  bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

button {
  background: #22c55e;
  border: none;
  color: #fff;
  font-size: 1rem;
  padding: 10px 18px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

button:hover {
  background: #16a34a;
}

/* Botón WhatsApp */
.whatsapp-btn {
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 55px;
  height: 55px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  text-decoration: none;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  color: white;
  transition: transform 0.2s ease;
}

.whatsapp-btn:hover {
  transform: scale(1.1);
}

/* Botón PDF */
.pdf-btn {
  position: fixed;
  bottom: 25px;
  left: 25px;
  background: #2563eb;
  color: #fff;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease;
}

.pdf-btn:hover {
  background: #1d4ed8;
}
