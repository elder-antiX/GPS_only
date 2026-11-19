# 📡 Radar GPS — Localização Compartilhada em Tempo Real

Um sistema web simples e leve de localização compartilhada em tempo real, criado para que amigos consigam se encontrar facilmente em festas, eventos ou lugares movimentados sem depender de aplicativos pesados.

---

## 💡 A Ideia

A ideia nasceu de um cenário prático: **dois (ou mais) amigos em uma festa que não querem se perder**. Em vez de tentar rastrear alguém por endereço IP (que possui margem de erro de quilômetros) ou varredura de roteadores Wi-Fi, o sistema utiliza a **Geolocation API** nativa dos navegadores modernos combinada com um backend leve em **Node.js** e um mapa interativo via **Leaflet.js**.

---

## 🚀 Funcionalidades

- **Compartilhamento por Nome/Apelido (`/enviar`):** Qualquer pessoa pode abrir o link no navegador do celular, digitar seu nome e começar a transmitir sua localização GPS em tempo real.
- **Mapa Interativo em Tempo Real (`/`):** Exibe múltiplos marcadores simultaneamente no mapa, identificados pelo nome de cada pessoa e o tempo desde a última atualização.
- **Painel Lateral ("No Radar"):** Lista todas as pessoas ativas no momento e permite clicar em qualquer nome para centralizar o mapa imediatamente na posição dela.
- **100% Gratuito e Sem Chaves de API:** Utiliza **Leaflet.js** com tiles gratuitos da **Esri (ArcGIS)**, dispensando cadastros ou chaves pagas do Google Maps.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla), [Leaflet.js](https://leafletjs.com/) & Geolocation API (`navigator.geolocation.watchPosition`)
- **Backend:** [Node.js](https://nodejs.org/), [Express](https://expressjs.com/) & CORS
- **Hospedagem / Deploy:** GitHub + [Render](https://render.com/) (com HTTPS nativo, exigido pelos navegadores para acesso ao GPS)

---

## 📁 Estrutura do Projeto

```text
GPS_Dev/
├── server.js        # Servidor Express que recebe e distribui as coordenadas
├── index.html       # Mapa interativo (Radar) com painel de usuários ativos
├── enviar.html      # Interface mobile para capturar e enviar o GPS do usuário
├── package.json     # Dependências e script de inicialização
└── .gitignore       # Ignora node_modules e arquivos locais
```

---

## ⚙️ Como Rodar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/elder-antiX/GPS_only.git
   cd GPS_only
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor:**
   ```bash
   npm start
   ```

4. **Acesse no navegador:**
   - **Mapa (Radar):** `https://gps-only.onrender.com`
   - **Enviar Localização:** `https://gps-only.onrender.com/enviar`

> **Nota:** Navegadores móveis exigem conexões seguras (`HTTPS`) para liberar o acesso ao GPS (`navigator.geolocation`). Em ambiente local (`localhost`), o navegador permite o acesso normalmente; para testar em celulares via internet, utilize a versão hospedada com HTTPS.

---

## 🌐 Como Usar Online

Com o projeto publicado (ex.: `https://gps-only.onrender.com`):

1. **Quem vai compartilhar a localização** acessa `https://gps-only.onrender.com/enviar` pelo celular, informa seu nome e permite o acesso à localização.
2. **Quem quer acompanhar no mapa** acessa `https://gps-only.onrender.com/` e acompanha os marcadores em tempo real.

---

## 🔮 Próximos Passos (Ideias de Evolução)

- [ ] Migrar a comunicação de *polling* (`setInterval`) para **WebSockets (`Socket.io`)** para atualização instantânea sem atraso.
- [ ] Expiração automática de usuários inativos após alguns minutos sem envio.
- [ ] Criação de salas privadas por código para diferentes grupos/eventos.
