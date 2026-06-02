const storageKey = "saude-ta-on-prototype-state-v3";

const defaultClasses = [
  {
    id: "funcional",
    name: "Ginástica Funcional",
    vacancies: 35,
    schedule: "Agenda divulgada no Instagram",
    location: "São João de Meriti",
    status: "Aberta",
    mark: "F",
    description: "Aulas de movimento, força e condicionamento para criar rotina de saúde.",
  },
  {
    id: "aerobica",
    name: "Aeróbica",
    vacancies: 35,
    schedule: "Agenda divulgada no Instagram",
    location: "São João de Meriti",
    status: "Aberta",
    mark: "A",
    description: "Atividade coletiva com ritmo, energia e foco em disposição no dia a dia.",
  },
  {
    id: "zumba",
    name: "Zumba",
    vacancies: 35,
    schedule: "Agenda divulgada no Instagram",
    location: "São João de Meriti",
    status: "Aberta",
    mark: "Z",
    description: "Dança, alegria e socialização em uma modalidade leve de divulgar e aderir.",
  },
  {
    id: "pilates",
    name: "Pilates",
    vacancies: 25,
    schedule: "Agenda divulgada no Instagram",
    location: "São João de Meriti",
    status: "Aberta",
    mark: "P",
    description: "Postura, respiração e fortalecimento com cuidado para diferentes públicos.",
  },
  {
    id: "ritbox",
    name: "Ritbox",
    vacancies: 30,
    schedule: "Agenda divulgada no Instagram",
    location: "São João de Meriti",
    status: "Aberta",
    mark: "R",
    description: "Treino com música, intensidade e presença para quem gosta de movimento.",
  },
  {
    id: "circuito",
    name: "Circuito funcional",
    vacancies: 30,
    schedule: "Agenda divulgada no Instagram",
    location: "São João de Meriti",
    status: "Aberta",
    mark: "C",
    description: "Aulões e circuitos para fortalecer a comunidade e manter a energia do projeto.",
  },
];

const defaultStudents = [
  {
    id: "sto-1001",
    name: "Mariana Costa",
    phone: "(21) 98888-1020",
    birth: "2008-03-11",
    className: "Zumba",
    status: "Confirmada",
    address: "Rua das Acácias, 120 - Centro",
    guardian: "Luciana Costa",
    message: "Prefere receber confirmação pelo WhatsApp.",
  },
  {
    id: "sto-1002",
    name: "Beatriz Almeida",
    phone: "(21) 97777-4412",
    birth: "1999-08-20",
    className: "Ginástica Funcional",
    status: "Nova",
    address: "Av. Brasil, 455 - Vila Nova",
    guardian: "",
    message: "Prefere turma da manhã.",
  },
  {
    id: "sto-1003",
    name: "Carla Menezes",
    phone: "(21) 96666-3001",
    birth: "1987-01-09",
    className: "Pilates",
    status: "Confirmada",
    address: "Rua Horizonte, 88 - Jardim Azul",
    guardian: "",
    message: "Quer saber quando abre a agenda oficial.",
  },
  {
    id: "sto-1004",
    name: "Joana Ribeiro",
    phone: "(21) 95555-1190",
    birth: "2012-11-02",
    className: "Aeróbica",
    status: "Pendente",
    address: "Rua Ipê, 91 - São Bento",
    guardian: "Patrícia Ribeiro",
    message: "Aguardando retorno do responsável.",
  },
  {
    id: "sto-1005",
    name: "Renata Oliveira",
    phone: "(21) 94444-2209",
    birth: "1976-05-14",
    className: "Circuito funcional",
    status: "Confirmada",
    address: "Rua da Feira, 15 - Bairro Alto",
    guardian: "",
    message: "Quer participar dos aulões aos sábados.",
  },
  {
    id: "sto-1006",
    name: "Lívia Martins",
    phone: "(21) 93333-8181",
    birth: "2004-09-27",
    className: "Ritbox",
    status: "Nova",
    address: "Estrada Principal, 701 - Campo Verde",
    guardian: "",
    message: "",
  },
];

const state = loadState();

function loadState() {
  const stored = localStorage.getItem(storageKey);
  if (!stored) {
    return {
      classes: structuredClone(defaultClasses),
      students: structuredClone(defaultStudents),
    };
  }

  try {
    const parsed = JSON.parse(stored);
    return {
      classes: parsed.classes?.length ? parsed.classes : structuredClone(defaultClasses),
      students: parsed.students?.length ? parsed.students : structuredClone(defaultStudents),
    };
  } catch {
    return {
      classes: structuredClone(defaultClasses),
      students: structuredClone(defaultStudents),
    };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function classOccupancy(className) {
  return state.students.filter((student) => student.className === className).length;
}

function fillPercent(used, total) {
  if (!total) return 0;
  return Math.min(100, Math.round((used / total) * 100));
}

function formatDate(value) {
  if (!value) return "-";
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

function getAge(birth) {
  if (!birth) return 0;
  const today = new Date();
  const date = new Date(`${birth}T00:00:00`);
  let age = today.getFullYear() - date.getFullYear();
  const monthDiff = today.getMonth() - date.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
    age -= 1;
  }
  return age;
}

function showToast(message) {
  const toast = document.querySelector("[data-toast]");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function setView(view) {
  document.querySelectorAll("[data-view]").forEach((section) => {
    section.hidden = section.dataset.view !== view;
  });
  document.querySelectorAll("[data-view-button]").forEach((button) => {
    button.classList.toggle("active", button.dataset.viewButton === view);
  });
  document.body.classList.toggle("admin-mode", view === "admin");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderActivities() {
  const grid = document.querySelector("[data-activity-grid]");
  const select = document.querySelector("[data-class-select]");

  grid.innerHTML = state.classes
    .map((item) => {
      return `
        <article class="activity-card">
          <div class="activity-top">
            <span class="activity-mark">${escapeHtml(item.mark)}</span>
            <span class="status confirmada">Aula 0800</span>
          </div>
          <div>
            <h3>${escapeHtml(item.name)}</h3>
            <p>${escapeHtml(item.description)}</p>
          </div>
          <div class="activity-meta">
            <span>Modalidade <strong>gratuita</strong></span>
            <span>Agenda <strong>Instagram</strong></span>
            <span>Local <strong>${escapeHtml(item.location)}</strong></span>
          </div>
          <p class="activity-note">Faça parte da Família Tá On.</p>
        </article>
      `;
    })
    .join("");

  select.innerHTML = state.classes
    .map((item) => `<option ${item.status !== "Aberta" ? "disabled" : ""}>${escapeHtml(item.name)}</option>`)
    .join("");
}

function renderMetrics() {
  const totalStudents = state.students.length;
  const totalVacancies = state.classes.reduce((sum, item) => sum + item.vacancies, 0);
  const activeClasses = state.classes.filter((item) => item.status === "Aberta").length;
  const newSubscriptions = state.students.filter((item) => item.status === "Nova").length;
  const occupancy = fillPercent(totalStudents, totalVacancies);

  setText("[data-total-alunos-public]", totalStudents);
  setText("[data-total-vagas-public]", totalVacancies);
  setText("[data-ocupacao-public]", `${occupancy}%`);
  setText("[data-total-alunos]", totalStudents);
  setText("[data-novas-inscricoes]", newSubscriptions);
  setText("[data-turmas-ativas]", activeClasses);
  setText("[data-taxa-ocupacao]", `${occupancy}%`);
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function renderStudents() {
  const table = document.querySelector("[data-student-table]");
  const query = document.querySelector("[data-student-search]")?.value?.trim().toLowerCase() || "";
  const filtered = state.students.filter((student) => {
    const haystack = `${student.name} ${student.phone} ${student.className} ${student.status}`.toLowerCase();
    return haystack.includes(query);
  });

  table.innerHTML = filtered
    .map((student) => {
      const statusClass = student.status.toLowerCase();
      return `
        <tr>
          <td>${escapeHtml(student.name)}</td>
          <td>${escapeHtml(student.phone)}</td>
          <td>${formatDate(student.birth)}</td>
          <td>${escapeHtml(student.className)}</td>
          <td><span class="status ${statusClass}">${escapeHtml(student.status)}</span></td>
          <td>
            <div class="action-row">
              <button class="mini-button" type="button" data-action="view" data-id="${student.id}">Visualizar</button>
              <button class="mini-button" type="button" data-action="edit" data-id="${student.id}">Editar</button>
              <button class="mini-button" type="button" data-action="print" data-id="${student.id}">Imprimir ficha</button>
              <button class="mini-button danger" type="button" data-action="delete" data-id="${student.id}">Excluir</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
}

function renderClassesAdmin() {
  const grid = document.querySelector("[data-class-admin-grid]");
  grid.innerHTML = state.classes
    .map((item) => {
      const used = classOccupancy(item.name);
      const percent = fillPercent(used, item.vacancies);
      return `
        <article class="class-card">
          <h3>${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <div class="class-meta">
            <span>${escapeHtml(item.schedule)}</span>
            <span>${escapeHtml(item.location)}</span>
            <span>${used} de ${item.vacancies} vagas ocupadas</span>
          </div>
          <div class="capacity">
            <div class="capacity-line"><i style="--fill:${percent}%"></i></div>
            <small>${percent}% de ocupação</small>
          </div>
          <footer>
            <span class="status ${item.status === "Aberta" ? "confirmada" : "pendente"}">${escapeHtml(item.status)}</span>
            <button class="mini-button" type="button" data-toggle-class="${item.id}">
              ${item.status === "Aberta" ? "Fechar inscrições" : "Abrir inscrições"}
            </button>
          </footer>
        </article>
      `;
    })
    .join("");
}

function renderReports() {
  const classReport = document.querySelector("[data-class-report]");
  const maxVacancies = Math.max(...state.classes.map((item) => item.vacancies), 1);
  classReport.innerHTML = state.classes
    .map((item) => {
      const used = classOccupancy(item.name);
      const percent = Math.max(6, Math.round((used / maxVacancies) * 100));
      return `
        <div class="bar-line">
          <header>
            <span>${escapeHtml(item.name)}</span>
            <strong>${used} alunos</strong>
          </header>
          <div class="bar-track"><i style="--fill:${percent}%"></i></div>
        </div>
      `;
    })
    .join("");

  const buckets = { "Até 17": 0, "18-39": 0, "40+": 0 };
  state.students.forEach((student) => {
    const age = getAge(student.birth);
    if (age <= 17) buckets["Até 17"] += 1;
    else if (age <= 39) buckets["18-39"] += 1;
    else buckets["40+"] += 1;
  });

  document.querySelector("[data-age-report]").innerHTML = Object.entries(buckets)
    .map(([label, total]) => `<span><strong>${total}</strong>${label}</span>`)
    .join("");
}

function renderAll() {
  renderActivities();
  renderMetrics();
  renderStudents();
  renderClassesAdmin();
  renderReports();
  saveState();
}

function createStudentFromForm(form) {
  const data = new FormData(form);
  const protocol = `STO-${Date.now().toString().slice(-6)}`;
  return {
    id: protocol.toLowerCase(),
    name: data.get("name"),
    phone: data.get("phone"),
    birth: data.get("birth"),
    className: data.get("className"),
    status: "Nova",
    address: data.get("address"),
    guardian: "",
    document: "-",
    message: data.get("message") || "",
    protocol,
  };
}

function findStudent(id) {
  return state.students.find((student) => student.id === id);
}

function openStudent(student) {
  const dialog = document.querySelector("[data-student-dialog]");
  const detail = document.querySelector("[data-student-detail]");
  detail.innerHTML = `
    <section class="student-detail">
      <p class="eyebrow">Ficha de aluno</p>
      <h3>${escapeHtml(student.name)}</h3>
      <dl>
        <dt>Telefone</dt><dd>${escapeHtml(student.phone)}</dd>
        <dt>Nascimento</dt><dd>${formatDate(student.birth)} (${getAge(student.birth)} anos)</dd>
        <dt>Turma</dt><dd>${escapeHtml(student.className)}</dd>
        <dt>Status</dt><dd><span class="status ${student.status.toLowerCase()}">${escapeHtml(student.status)}</span></dd>
        <dt>Endereço</dt><dd>${escapeHtml(student.address)}</dd>
        <dt>Responsável</dt><dd>${escapeHtml(student.guardian || "A confirmar, se necessário")}</dd>
        <dt>Documento</dt><dd>Não solicitado nesta primeira etapa</dd>
        <dt>Recado</dt><dd>${escapeHtml(student.message || student.notes || "-")}</dd>
      </dl>
      <button class="button button-primary button-full" type="button" data-print-current="${student.id}">Imprimir ficha</button>
    </section>
  `;
  dialog.showModal();
}

function editStudent(student) {
  const statuses = ["Nova", "Confirmada", "Pendente"];
  const current = statuses.indexOf(student.status);
  student.status = statuses[(current + 1) % statuses.length];
  renderAll();
  showToast(`Status de ${student.name} atualizado para ${student.status}.`);
}

function printStudent(student) {
  const printWindow = window.open("", "_blank", "width=760,height=900");
  if (!printWindow) {
    showToast("Permita pop-ups para imprimir a ficha.");
    return;
  }

  printWindow.document.write(`
    <!doctype html>
    <html lang="pt-BR">
      <head>
        <meta charset="utf-8" />
        <title>Ficha - ${escapeHtml(student.name)}</title>
        <style>
          body { font-family: Arial, sans-serif; color: #0f172a; padding: 32px; }
          h1 { margin: 0 0 8px; }
          p { color: #475569; }
          dl { display: grid; grid-template-columns: 180px 1fr; gap: 12px; margin-top: 28px; }
          dt { font-weight: 700; color: #475569; }
          dd { margin: 0; }
          .box { border: 1px solid #cbd5e1; border-radius: 8px; padding: 24px; }
        </style>
      </head>
      <body>
        <div class="box">
          <h1>Ficha de matrícula</h1>
          <p>Projeto Saúde Tá On</p>
          <dl>
            <dt>Nome</dt><dd>${escapeHtml(student.name)}</dd>
            <dt>Telefone</dt><dd>${escapeHtml(student.phone)}</dd>
            <dt>Data de nascimento</dt><dd>${formatDate(student.birth)}</dd>
            <dt>Turma</dt><dd>${escapeHtml(student.className)}</dd>
            <dt>Status</dt><dd>${escapeHtml(student.status)}</dd>
            <dt>Endereço</dt><dd>${escapeHtml(student.address)}</dd>
            <dt>Responsável</dt><dd>${escapeHtml(student.guardian || "A confirmar, se necessário")}</dd>
            <dt>Documento</dt><dd>Não solicitado nesta primeira etapa</dd>
            <dt>Recado</dt><dd>${escapeHtml(student.message || student.notes || "-")}</dd>
          </dl>
        </div>
        <script>window.print(); window.onafterprint = () => window.close();</script>
      </body>
    </html>
  `);
  printWindow.document.close();
}

function deleteStudent(student) {
  const index = state.students.findIndex((item) => item.id === student.id);
  if (index >= 0) {
    state.students.splice(index, 1);
    renderAll();
    showToast(`${student.name} foi removida da lista.`);
  }
}

function exportCsv() {
  const header = ["Nome", "Telefone", "Data Nasc.", "Turma", "Status", "Endereço", "Recado"];
  const rows = state.students.map((student) => [
    student.name,
    student.phone,
    formatDate(student.birth),
    student.className,
    student.status,
    student.address,
    student.message || student.notes || "",
  ]);
  const csv = [header, ...rows]
    .map((row) => row.map((cell) => `"${String(cell ?? "").replaceAll('"', '""')}"`).join(";"))
    .join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "saude-ta-on-alunos.csv";
  link.click();
  URL.revokeObjectURL(url);
  showToast("Planilha exportada.");
}

function printPresenceList() {
  const rows = state.students
    .map(
      (student) =>
        `<tr><td>${escapeHtml(student.name)}</td><td>${escapeHtml(student.className)}</td><td></td><td></td></tr>`,
    )
    .join("");
  const printWindow = window.open("", "_blank", "width=900,height=900");
  if (!printWindow) {
    showToast("Permita pop-ups para imprimir a lista.");
    return;
  }
  printWindow.document.write(`
    <!doctype html>
    <html lang="pt-BR">
      <head>
        <meta charset="utf-8" />
        <title>Lista de presença</title>
        <style>
          body { font-family: Arial, sans-serif; color: #0f172a; padding: 28px; }
          table { width: 100%; border-collapse: collapse; margin-top: 22px; }
          th, td { border: 1px solid #cbd5e1; padding: 10px; text-align: left; }
          th { background: #f1f5f9; }
        </style>
      </head>
      <body>
        <h1>Lista de presença</h1>
        <p>Projeto Saúde Tá On</p>
        <table>
          <thead><tr><th>Aluno</th><th>Turma</th><th>Presença</th><th>Assinatura</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
        <script>window.print(); window.onafterprint = () => window.close();</script>
      </body>
    </html>
  `);
  printWindow.document.close();
}

document.querySelectorAll("[data-view-button]").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.viewButton));
});

document.querySelector("[data-enrollment-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  const student = createStudentFromForm(event.currentTarget);
  state.students.unshift(student);
  event.currentTarget.reset();
  renderAll();
  const feedback = document.querySelector("[data-form-feedback]");
  feedback.hidden = false;
  feedback.textContent = `Inscrição enviada com sucesso. Protocolo ${student.protocol}.`;
  showToast("Cadastro recebido. A equipe entra em contato pelo WhatsApp.");
});

document.querySelector("[data-student-search]").addEventListener("input", renderStudents);

document.querySelector("[data-student-table]").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const student = findStudent(button.dataset.id);
  if (!student) return;
  if (button.dataset.action === "view") openStudent(student);
  if (button.dataset.action === "edit") editStudent(student);
  if (button.dataset.action === "print") printStudent(student);
  if (button.dataset.action === "delete") deleteStudent(student);
});

document.querySelector("[data-student-dialog]").addEventListener("click", (event) => {
  const button = event.target.closest("[data-print-current]");
  if (!button) return;
  const student = findStudent(button.dataset.printCurrent);
  if (student) printStudent(student);
});

document.querySelector("[data-class-admin-grid]").addEventListener("click", (event) => {
  const button = event.target.closest("[data-toggle-class]");
  if (!button) return;
  const currentClass = state.classes.find((item) => item.id === button.dataset.toggleClass);
  if (!currentClass) return;
  currentClass.status = currentClass.status === "Aberta" ? "Fechada" : "Aberta";
  renderAll();
  showToast(`${currentClass.name}: inscrições ${currentClass.status.toLowerCase()}.`);
});

document.querySelector("[data-create-class]").addEventListener("click", () => {
  const count = state.classes.length + 1;
  state.classes.push({
    id: `nova-turma-${count}`,
    name: `Nova turma ${count}`,
    vacancies: 20,
    schedule: "Definir horário",
    location: "Definir local",
    status: "Aberta",
    mark: "N",
    description: "Turma demonstrativa criada pelo painel administrativo.",
  });
  renderAll();
  showToast("Nova turma criada para edição.");
});

document.querySelector("[data-export-csv]").addEventListener("click", exportCsv);
document.querySelector("[data-print-presence]").addEventListener("click", printPresenceList);

if (new URLSearchParams(window.location.search).get("admin") === "fernanda" || window.location.hash === "#admin") {
  setView("admin");
} else {
  setView("public");
}

renderAll();
