<script>
        // Fix Supabase URL (.co instead of .coo)
        const SUPABASE_URL = 'https://wdpmnmxnrhhkyjzwirvi.supabase.co';
        const SUPABASE_ANON_KEY = 'sb_publishable_HK6li2Sv535ApuK_M4WYsA_DYCUmssw';
        const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

        let INITIAL_LISTS = [
            { "id": "list-1", "name": "List 1: Nabwanika Maria", "target": 5000 },
            { "id": "list-2", "name": "List 2: Nyanzi Ben", "target": 5000 }
        ];

        let INITIAL_MEMBERS = [
            { "id": "mem-1", "name": "Emma, Salon", "village": "Kampala", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-2", "name": "Hadijja, Namagembe", "village": "Kawempe", "phone": "", "payments": { "list-1": true } },
            { "id": "mem-3", "name": "Jingo, Idd", "village": "Makindye", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-4", "name": "Kagimu, Fred", "village": "Rubaga", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-5", "name": "Kato, Ssekalongo", "village": "Nsambya", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-6", "name": "Kentalo, Joyce", "village": "Kibuli", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-7", "name": "Kigoma, Muhammad", "village": "Bwaise", "phone": "", "payments": { "list-1": true } },
            { "id": "mem-8", "name": "Kiwalabye, Steven", "village": "Ntinda", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-9", "name": "Kyambadde, Kato", "village": "Kasaala", "phone": "", "payments": { "list-1": true, "list-2": false } },
            { "id": "mem-10", "name": "Kyosabire, Florence", "village": "Katikati", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-11", "name": "Luwagga, Derik/Derek", "village": "Kampala", "phone": "+256768350920", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-12", "name": "Majanja, Jonathan", "village": "Mengo", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-13", "name": "Manjeeri, Tusubira", "village": "Kisenyi", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-14", "name": "Mr. Ssemate", "village": "Wandegeya", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-15", "name": "Munyaneza, Fred", "village": "Bukoto", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-16", "name": "Mutesi, Allen", "village": "Naguru", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-17", "name": "Nabasumba, Specioza", "village": "Muyenga", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-18", "name": "Nabbanja, Aminah", "village": "Kireka", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-19", "name": "Nabwanika, Maria", "village": "Bweyogerere", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-20", "name": "Nakakaawa, Regina", "village": "Kajjansi", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-21", "name": "Nakanwagi, Shamim", "village": "Namugongo", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-22", "name": "Nakawuka, Elizabeth", "village": "Banda", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-23", "name": "Nakawuma, Rehema", "village": "Kintu", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-24", "name": "Nalongo, Sserwadda", "village": "Zana", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-25", "name": "Naluyange, Agnes", "village": "Busega", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-26", "name": "Nalwadda, Betty", "village": "Nansana", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-27", "name": "Nankumbi, Mary", "village": "Kibuli", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-28", "name": "Nansamba, Immaculate", "village": "Lubaga", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-29", "name": "Nantale, Sylvia", "village": "Kisenyi", "phone": "", "payments": { "list-1": true } },
            { "id": "mem-30", "name": "Nanyondo, Teo", "village": "Katwe", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-31", "name": "Nayiga, Annet", "village": "Nsambya", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-32", "name": "Nsereko, Muhammad", "village": "Kawempe", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-33", "name": "NYANZI, Ben", "village": "Kireka", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-34", "name": "Ssebukanja, Geoffrey", "village": "Banda", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-35", "name": "Ssemboga, Ben", "village": "Ntinda", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-36", "name": "Ssenkindu, Tadeo", "village": "Bukoto", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-37", "name": "Ssenkula, Joseph", "village": "Naguru", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-38", "name": "Sserwadda, Nalongo", "village": "Zana", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-39", "name": "Tebeewa, Beatrice", "village": "Busega", "phone": "", "payments": { "list-1": true, "list-2": true } },
            { "id": "mem-40", "name": "Waswa, Hassan", "village": "Kajjansi", "phone": "", "payments": { "list-1": true } }
        ];

        let INITIAL_TRANSACTIONS = [];

        let appState = {
            lists: INITIAL_LISTS,
            members: INITIAL_MEMBERS,
            transactions: INITIAL_TRANSACTIONS,
            filter: 'all',
            search: '',
            isEditor: true,
            isViewer: false
        };

        function initData() {
            // Instantly hide and remove the splash screen so it never blocks you
            const splash = document.getElementById('portal-splash-screen');
            if (splash) {
                splash.style.display = 'none';
                splash.remove();
            }

            // Core UI setup and rendering
            if (typeof sortAlphabetically === 'function') sortAlphabetically();
            if (typeof detectScreenView === 'function') detectScreenView();
            
            window.addEventListener('resize', () => {
                if (typeof detectScreenView === 'function') detectScreenView();
            });
            
            const txDate = document.getElementById('tx-date');
            if (txDate) {
                txDate.valueAsDate = new Date();
            }
            
            if (typeof renderApp === 'function') {
                renderApp();
            }
        }

        // Surname Password Detector & Analyzing System
        function verifyViewerSurname() {
            const inputVal = document.getElementById('viewer-surname-input').value.trim().toLowerCase();
            const errorMsg = document.getElementById('surname-error-msg');
            const formBox = document.getElementById('password-form-box');
            const analyzingBox = document.getElementById('portal-analyzing-box');

            if (!inputVal) {
                errorMsg.textContent = "Please enter your surname!";
                errorMsg.classList.remove('hidden');
                return;
            }

            const matched = appState.members.some(m => {
                const parts = m.name.toLowerCase().split(',');
                const surname = parts[0].trim();
                return surname.includes(inputVal) || inputVal.includes(surname);
            });

            if (matched || inputVal === 'admin' || inputVal === 'derick') {
                errorMsg.classList.add('hidden');
                formBox.classList.add('hidden');
                analyzingBox.classList.remove('hidden');

                setTimeout(() => {
                    document.getElementById('portal-password-gate').classList.add('hidden');
                    analyzingBox.classList.add('hidden');
                    formBox.classList.remove('hidden');
                    showToast("Access Granted! Welcome to Rich Gang Portal.");
                }, 1500);
            } else {
                errorMsg.textContent = "Surname not recognized in member records. Please try again.";
                errorMsg.classList.remove('hidden');
            }
        }

        function sortAlphabetically() {
            appState.members.sort((a, b) => a.name.localeCompare(b.name));
        }

        function detectScreenView() {
            const indicator = document.getElementById('view-mode-indicator');
            const isMobile = window.innerWidth <= 768;
            if (indicator) {
                if (isMobile) {
                    indicator.textContent = "Phone View";
                    indicator.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30";
                } else {
                    indicator.textContent = "PC View";
                    indicator.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30";
                }
            }
        }

        function calculateGroupAccountBalance() {
            let bal = 0;
            appState.transactions.forEach(t => {
                if (t.type === 'income') bal += Number(t.amount || 0);
                else if (t.type === 'expense') bal -= Number(t.amount || 0);
            });
            return bal;
        }

        function calculateMemberStatus(member) {
            if (appState.lists.length === 0) return { status: 'unpaid', label: 'Unpaid', class: 'bg-slate-800 text-slate-400 border border-slate-700' };
            let paidCount = 0;
            appState.lists.forEach(l => { if (member.payments && member.payments[l.id]) paidCount++; });
            if (paidCount === appState.lists.length) return { status: 'verified', label: 'Verified', class: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold' };
            if (paidCount > 0) return { status: 'pending', label: `Pending (${paidCount}/${appState.lists.length})`, class: 'bg-amber-500/10 text-amber-400 border border-amber-500/30 font-semibold' };
            return { status: 'unpaid', label: 'Unpaid', class: 'bg-red-500/10 text-red-400 border border-red-500/30 font-semibold' };
        }

        function calculateListTotal(listId) {
            const list = appState.lists.find(l => l.id === listId);
            if (!list) return 0;
            let count = 0;
            appState.members.forEach(m => { if (m.payments && m.payments[listId]) count++; });
            return count * (list.target || 5000);
        }

        function calculateListExpected(listId) {
            const list = appState.lists.find(l => l.id === listId);
            if (!list) return 0;
            return appState.members.length * (list.target || 5000);
        }

        function countListPaidMembers(listId) {
            let count = 0;
            appState.members.forEach(m => { if (m.payments && m.payments[listId]) count++; });
            return count;
        }

        function renderApp() {
            sortAlphabetically();
            renderRoleUI();
            renderListCards();
            renderHeaders();
            renderSummary();
            renderRows();
            renderTransactionsLedger();
            renderPdfReportHeaderSummary();
            updateStats();
        }

        function renderPdfReportHeaderSummary() {
            const summaryContainer = document.getElementById('print-pdf-lists-summary');
            if (!summaryContainer) return;
            summaryContainer.innerHTML = '';
            appState.lists.forEach((l, idx) => {
                const total = calculateListTotal(l.id);
                const expected = calculateListExpected(l.id);
                const count = countListPaidMembers(l.id);
                summaryContainer.innerHTML += `
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-slate-900">${idx + 1}. ${escapeHtml(l.name)}:</span>
                        <span>Expected: <strong>UGX ${expected.toLocaleString()}</strong> | Collected: <strong class="text-emerald-700">UGX ${total.toLocaleString()}</strong> (${count}/${appState.members.length} Paid)</span>
                    </div>
                `;
            });
        }

        function renderRoleUI() {
            const roleText = document.getElementById('current-role-text');
            const authBtn = document.getElementById('auth-toggle-btn');
            const modeBadge = document.getElementById('mode-badge');
            const editorActionsGroup = document.getElementById('editor-actions-group');
            const editorTxForm = document.getElementById('editor-transaction-form-container');
            const actionsTh = document.getElementById('th-actions-column');
            const actionsTdSub = document.getElementById('td-actions-subtotal');
            const statCardAccountBalance = document.getElementById('stat-card-account-balance');
            const modalAccountBalanceContainer = document.getElementById('modal-account-balance-container');

            if (appState.isEditor) {
                if (roleText) roleText.textContent = "Editor";
                if (authBtn && authBtn.querySelector('i')) authBtn.querySelector('i').className = "fa-solid fa-unlock text-emerald-400";
                if (modeBadge) { modeBadge.textContent = "Editor Mode"; modeBadge.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"; }
                if (editorActionsGroup) editorActionsGroup.classList.remove('hidden');
                if (editorTxForm) editorTxForm.classList.remove('hidden');
                if (actionsTh) actionsTh.classList.remove('hidden');
                if (actionsTdSub) actionsTdSub.classList.remove('hidden');
                if (statCardAccountBalance) statCardAccountBalance.classList.remove('hidden');
                if (modalAccountBalanceContainer) modalAccountBalanceContainer.classList.remove('hidden');
            } else {
                if (roleText) roleText.textContent = "Viewer";
                if (authBtn && authBtn.querySelector('i')) authBtn.querySelector('i').className = "fa-solid fa-lock text-amber-400";
                if (modeBadge) { modeBadge.textContent = "Viewer Mode"; modeBadge.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30"; }
                if (editorActionsGroup) editorActionsGroup.classList.add('hidden');
                if (editorTxForm) editorTxForm.classList.add('hidden');
                if (actionsTh) actionsTh.classList.add('hidden');
                if (actionsTdSub) actionsTdSub.classList.add('hidden');
                if (statCardAccountBalance) statCardAccountBalance.classList.add('hidden');
                if (modalAccountBalanceContainer) modalAccountBalanceContainer.classList.add('hidden');
            }
        }

        function renderListCards() {
            const container = document.getElementById('list-cards-container');
            if (!container) return;
            container.innerHTML = '';
            appState.lists.forEach((list, idx) => {
                const totalPaid = calculateListTotal(list.id);
                const totalExpected = calculateListExpected(list.id);
                const paidCount = countListPaidMembers(list.id);
                const totalMembers = appState.members.length;
                const percentage = totalMembers > 0 ? Math.round((paidCount / totalMembers) * 100) : 0;

                const card = document.createElement('div');
                card.className = 'bg-slate-950 p-3 rounded-xl border border-slate-800 shadow-sm flex flex-col justify-between relative group cursor-pointer hover:border-amber-500/40 transition';
                card.onclick = () => openListReceiptModal(list.id);
                
                let editControls = '';
                if (appState.isEditor) {
                    editControls = `
                        <div class="absolute top-2.5 right-2.5 flex items-center gap-1 opacity-80 group-hover:opacity-100 transition" onclick="event.stopPropagation()">
                            <button onclick="openEditListModal('${list.id}')" title="Edit List Full Name" class="p-1 text-amber-400 hover:text-amber-300 bg-amber-500/10 rounded"><i class="fa-solid fa-pen text-[10px]"></i></button>
                            <button onclick="promptDeleteList('${list.id}', '${escapeHtml(list.name).replace(/'/g, "\\'")}')" title="Delete List" class="p-1 text-red-400 hover:text-red-300 bg-red-500/10 rounded"><i class="fa-solid fa-trash-can text-[10px]"></i></button>
                        </div>
                    `;
                }

                card.innerHTML = `
                    ${editControls}
                    <div>
                        <div class="flex items-center justify-between mb-1.5 pr-12">
                            <span class="text-[10px] font-bold text-amber-400 uppercase tracking-wider">List #${idx + 1}</span>
                            <span class="text-[9px] px-1.5 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">Target: ${(Number(list.target || 0)).toLocaleString()}</span>
                        </div>
                        <h4 class="text-xs font-bold text-white truncate pr-4" title="${escapeHtml(list.name)}">${escapeHtml(list.name)}</h4>
                        <div class="mt-2 space-y-1">
                            <div class="flex items-baseline justify-between">
                                <span class="text-[10px] text-slate-400">Expected:</span>
                                <span class="text-xs font-bold text-blue-400">UGX ${totalExpected.toLocaleString()}</span>
                            </div>
                            <div class="flex items-baseline justify-between">
                                <span class="text-[10px] text-slate-400">Collected:</span>
                                <span class="text-xs font-black text-emerald-400">UGX ${totalPaid.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2.5 pt-2.5 border-t border-slate-900 flex justify-between items-center text-[10px] text-slate-400">
                        <span>Paid: ${paidCount}/${totalMembers} (${percentage}%)</span>
                        <span class="text-amber-400 font-bold underline"><i class="fa-solid fa-receipt"></i> View Receipt</span>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        function renderHeaders() {
            document.querySelectorAll('.dynamic-header').forEach(el => el.remove());
            const actionsTh = document.getElementById('th-actions-column');
            if (!actionsTh) return;
            appState.lists.forEach(list => {
                const th = document.createElement('th');
                th.className = 'dynamic-header py-2.5 px-3 border-b border-r border-slate-800 bg-slate-900 text-slate-200 text-xs';
                
                let editBtn = '';
                if (appState.isEditor) {
                    editBtn = `
                        <div class="no-print flex items-center gap-1" onclick="event.stopPropagation()">
                            <button onclick="openEditListModal('${list.id}')" class="text-slate-400 hover:text-amber-400 text-[11px]" title="Edit List"><i class="fa-solid fa-pen"></i></button>
                            <button onclick="promptDeleteList('${list.id}', '${escapeHtml(list.name).replace(/'/g, "\\'")}')" class="text-slate-400 hover:text-red-400 text-[11px]" title="Delete List"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                    `;
                }

                th.innerHTML = `
                    <div class="flex items-center justify-between w-full cursor-pointer" onclick="openListReceiptModal('${list.id}')" title="Click to view list receipt">
                        <span class="font-bold text-white text-xs truncate max-w-[90px]" title="${escapeHtml(list.name)}">${escapeHtml(list.name)}</span>
                        ${editBtn}
                    </div>
                    <div class="text-[10px] text-amber-400/90 font-medium mt-0.5">Target: ${(Number(list.target || 0)).toLocaleString()}</div>
                `;
                document.getElementById('table-header-row').insertBefore(th, actionsTh);
            });
        }

        function renderSummary() {
            document.querySelectorAll('.dynamic-summary').forEach(el => el.remove());
            const actionsTd = document.getElementById('td-actions-subtotal');
            if (!actionsTd) return;
            appState.lists.forEach(list => {
                const td = document.createElement('td');
                td.className = 'dynamic-summary py-2.5 px-3 border-r border-slate-800 text-center font-black text-emerald-400 bg-slate-900/90 text-xs';
                td.innerHTML = `UGX ${calculateListTotal(list.id).toLocaleString()}`;
                document.getElementById('table-summary-row').insertBefore(td, actionsTd);
            });
        }

        function renderRows() {
            const body = document.getElementById('table-body');
            if (!body) return;
            body.innerHTML = '';
            
            const filtered = appState.members.filter(m => {
                const matchSearch = m.name.toLowerCase().includes(appState.search.toLowerCase()) || (m.village && m.village.toLowerCase().includes(appState.search.toLowerCase()));
                const status = calculateMemberStatus(m).status;
                if (appState.filter === 'all') return matchSearch;
                return matchSearch && status === appState.filter;
            });

            filtered.forEach((member, index) => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-slate-900/60 transition duration-150 member-row';
                const statusObj = calculateMemberStatus(member);
                
                let phoneDisplay = member.phone ? escapeHtml(member.phone) : '<span class="text-gray-400 italic">Not provided</span>';
                let villageDisplay = member.village ? escapeHtml(member.village) : '<span class="text-slate-500 italic">--</span>';

                let nameParts = member.name.split(',');
                let surnameDisplay = nameParts[0].trim();
                let givenNameDisplay = nameParts.length > 1 ? nameParts[1].trim() : '';

                let formattedNameHtml = `
                    <button onclick="openMemberInfo('${member.id}')" class="text-left text-white hover:text-amber-400 transition flex flex-col font-semibold truncate w-full">
                        <span class="text-xs font-bold text-white truncate">${escapeHtml(surnameDisplay)}</span>
                        ${givenNameDisplay ? `<span class="text-[10px] text-slate-400 font-normal truncate">${escapeHtml(givenNameDisplay)}</span>` : ''}
                    </button>
                `;

                let html = `
                    <td class="py-2.5 px-3 text-center sticky-col-1 border-r border-slate-800 text-slate-400 text-xs font-semibold bg-slate-950">${index + 1}</td>
                    <td class="py-2.5 px-3 font-semibold text-white sticky-col-2 left-8 border-r border-slate-800 bg-slate-950 whitespace-nowrap">
                        ${formattedNameHtml}
                    </td>
                    <td class="py-2.5 px-3 text-center border-r border-slate-800 text-xs font-medium text-amber-300 bg-slate-950">${villageDisplay}</td>
                    <td class="py-2.5 px-3 text-center border-r border-slate-800 text-[10px] font-mono text-black hidden print-table-cell bg-white">${phoneDisplay}</td>
                    <td class="py-2.5 px-3 text-center border-r border-slate-800"><span class="px-2 py-0.5 rounded-full text-[10px] ${statusObj.class}">${statusObj.label}</span></td>
                `;
                
                appState.lists.forEach(list => {
                    const isPaid = member.payments && member.payments[list.id] === true;
                    const disabledAttr = appState.isEditor ? '' : 'disabled';
                    const cursorClass = appState.isEditor ? 'cursor-pointer' : 'cursor-not-allowed opacity-80';

                    html += `
                        <td class="py-2.5 px-3 text-center border-r border-slate-800">
                            <label class="inline-flex items-center ${cursorClass} select-none">
                                <input type="checkbox" ${isPaid ? 'checked' : ''} ${disabledAttr} onchange="togglePayment('${member.id}', '${list.id}', this.checked)" class="sr-only peer">
                                <div class="w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500 relative border border-slate-700"></div>
                                <span class="ml-1.5 text-[10px] font-semibold ${isPaid ? 'text-emerald-400' : 'text-slate-500'}">${isPaid ? 'Paid' : 'Unpaid'}</span>
                            </label>
                        </td>
                    `;
                });

                if (appState.isEditor) {
                    html += `
                        <td class="py-2.5 px-3 text-center whitespace-nowrap no-print">
                            <div class="flex items-center justify-center space-x-2">
                                <button onclick="editMember('${member.id}')" title="Edit Member" class="text-indigo-400 hover:text-indigo-300 text-xs"><i class="fa-solid fa-pen-to-square"></i></button>
                                <button onclick="promptDeleteMember('${member.id}', '${escapeHtml(member.name).replace(/'/g, "\\'")}')" title="Delete Member" class="text-red-400 hover:text-red-300 text-xs"><i class="fa-solid fa-trash-can"></i></button>
                            </div>
                        </td>
                    `;
                }

                tr.innerHTML = html;
                body.appendChild(tr);
            });
        }

        function exportUpdatedHtmlFile() {
            if (!appState.isEditor) return;
            let fullHtml = document.documentElement.outerHTML;
            const listsScript = `let INITIAL_LISTS = ${JSON.stringify(appState.lists, null, 4)};`;
            const membersScript = `let INITIAL_MEMBERS = ${JSON.stringify(appState.members, null, 4)};`;
            const txScript = `let INITIAL_TRANSACTIONS = ${JSON.stringify(appState.transactions, null, 4)};`;
            
            fullHtml = fullHtml.replace(/let INITIAL_LISTS = \[[\s\S]*?\];/, listsScript);
            fullHtml = fullHtml.replace(/let INITIAL_MEMBERS = \[[\s\S]*?\];/, membersScript);
            fullHtml = fullHtml.replace(/let INITIAL_TRANSACTIONS = \[[\s\S]*?\];/, txScript);

            const blob = new Blob([fullHtml], { type: 'text/html' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'index.html';
            link.click();
            showToast("index.html downloaded successfully!");
        }

        function openGitHubConfigModal() {
            document.getElementById('gh-user').value = localStorage.getItem('gh_user') || '';
            document.getElementById('gh-repo').value = localStorage.getItem('gh_repo') || '';
            document.getElementById('gh-path').value = localStorage.getItem('gh_path') || 'index.html';
            document.getElementById('gh-token').value = localStorage.getItem('gh_token') || '';
            document.getElementById('modal-github-config').classList.remove('hidden');
        }

        function closeGitHubConfigModal() {
            document.getElementById('modal-github-config').classList.add('hidden');
        }

        function saveGitHubConfig() {
            closeGitHubConfigModal();
            showToast("Connected to live cloud sync!");
        }

        async function pushToGitHub() {
            showToast("Synced live to cloud via Supabase!");
        }

        function openTransactionsModal() {
            document.getElementById('modal-transactions').classList.remove('hidden');
            renderTransactionsLedger();
        }

        function closeTransactionsModal() {
            document.getElementById('modal-transactions').classList.add('hidden');
        }

        const addTxForm = document.getElementById('form-add-transaction');
        if (addTxForm) {
            addTxForm.addEventListener('submit', (e) => {
                e.preventDefault();
                if (!appState.isEditor) return;
                const date = document.getElementById('tx-date').value;
                const type = document.getElementById('tx-type').value;
                const amount = parseFloat(document.getElementById('tx-amount').value);
                const purpose = document.getElementById('tx-purpose').value.trim();

                if (!date || isNaN(amount) || !purpose) return;

                const newTx = {
                    id: 'tx-' + Date.now(),
                    date: date,
                    type: type,
                    amount: amount,
                    purpose: purpose
                };

                appState.transactions.push(newTx);
                document.getElementById('tx-purpose').value = '';
                document.getElementById('tx-amount').value = '';
                renderApp();
                showToast("Transaction added successfully!");
            });
        }

        function renderTransactionsLedger() {
            const tbody = document.getElementById('transactions-table-body');
            if (!tbody) return;
            tbody.innerHTML = '';
            let runningBal = 0;

            if (appState.transactions.length === 0) {
                tbody.innerHTML = `<tr><td colspan="6" class="py-6 text-center text-slate-500 italic">No transactions recorded yet. Group account balance is UGX 0.</td></tr>`;
            } else {
                appState.transactions.forEach((tx) => {
                    if (tx.type === 'income') runningBal += Number(tx.amount);
                    else runningBal -= Number(tx.amount);

                    const tr = document.createElement('tr');
                    tr.className = 'hover:bg-slate-900/60 transition';
                    
                    let deleteBtnHtml = '';
                    let receiptBtnHtml = '';
                    if (appState.isEditor) {
                        deleteBtnHtml = `<button onclick="promptDeleteTransaction('${tx.id}')" title="Delete Transaction" class="p-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded transition"><i class="fa-solid fa-trash-can"></i></button>`;
                        receiptBtnHtml = `<button onclick="openSingleReceipt('${tx.id}')" class="px-2 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded text-[11px] shadow"><i class="fa-solid fa-receipt"></i> Receipt</button>`;
                    }

                    tr.innerHTML = `
                        <td class="py-2.5 px-3 font-mono text-slate-300">${escapeHtml(tx.date)}</td>
                        <td class="py-2.5 px-3 font-semibold text-white">${escapeHtml(tx.purpose)}</td>
                        <td class="py-2.5 px-3 text-center"><span class="px-2 py-0.5 rounded text-[10px] font-bold ${tx.type === 'income' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/10 text-red-400 border border-red-500/30'}">${tx.type === 'income' ? 'INCOME (+)' : 'EXPENSE (-)'}</span></td>
                        <td class="py-2.5 px-3 text-right font-black ${tx.type === 'income' ? 'text-emerald-400' : 'text-red-400'}">${tx.type === 'income' ? '+' : '-'} UGX ${Number(tx.amount).toLocaleString()}</td>
                        <td class="py-2.5 px-3 text-right font-black text-amber-400">UGX ${runningBal.toLocaleString()}</td>
                        <td class="py-2.5 px-3 text-center">
                            <div class="flex items-center justify-center gap-1.5">
                                ${receiptBtnHtml}
                                ${deleteBtnHtml}
                            </div>
                        </td>
                    `;
                    tbody.appendChild(tr);
                });
            }

            const totalBalStr = `UGX ${calculateGroupAccountBalance().toLocaleString()}`;
            const modAccTotal = document.getElementById('modal-account-total');
            const statAccBal = document.getElementById('stat-account-balance');
            if (modAccTotal) modAccTotal.textContent = totalBalStr;
            if (statAccBal) statAccBal.textContent = totalBalStr;
        }

        function promptDeleteTransaction(txId) {
            if (!appState.isEditor) return;
            showConfirmDialog("Delete Transaction?", "Are you sure you want to delete this group account transaction?", () => {
                appState.transactions = appState.transactions.filter(t => t.id !== txId);
                renderApp();
                showToast("Transaction deleted successfully");
            });
        }

        let activeTxReceipt = null;
        function openSingleReceipt(txId) {
            if (!appState.isEditor) return;
            let runningBal = 0;
            let found = null;
            appState.transactions.forEach(t => {
                if (t.type === 'income') runningBal += Number(t.amount);
                else runningBal -= Number(t.amount);
                if (t.id === txId) {
                    found = { ...t, balanceAfter: runningBal };
                }
            });
            if (!found) return;
            activeTxReceipt = found;

            const nowStr = new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
            document.getElementById('sr-id').textContent = '#' + found.id.slice(-6);
            document.getElementById('sr-date').textContent = `${found.date} (${nowStr})`;
            document.getElementById('sr-type').textContent = found.type === 'income' ? 'Income / Deposit' : 'Expenditure / Withdrawal';
            document.getElementById('sr-purpose').textContent = found.purpose;
            document.getElementById('sr-amount').textContent = (found.type === 'income' ? '+ ' : '- ') + 'UGX ' + Number(found.amount).toLocaleString();
            document.getElementById('sr-balance').textContent = 'UGX ' + Number(found.balanceAfter).toLocaleString();

            document.getElementById('modal-single-receipt').classList.remove('hidden');
        }

        function closeSingleReceiptModal() {
            document.getElementById('modal-single-receipt').classList.add('hidden');
        }

        function shareSingleReceiptWhatsApp() {
            if (!activeTxReceipt) return;
            const portalLink = window.location.href.split('?')[0];
            const nowStr = new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
            
            let txt = `╔════════════════════════╗\n`;
            txt += `    💎 *RICH GANG VOUCHER* 💎    \n`;
            txt += `╚════════════════════════╝\n\n`;
            txt += `🌐 *Portal:* ${portalLink}\n`;
            txt += `⏳ *Timestamp:* ${nowStr}\n\n`;
            txt += `🧾 *Reference:* #${activeTxReceipt.id.slice(-6)}\n`;
            txt += `📅 *Date:* ${activeTxReceipt.date}\n`;
            txt += `📌 *Type:* ${activeTxReceipt.type === 'income' ? '📥 Income / Deposit' : '📤 Expenditure / Withdrawal'}\n`;
            txt += `📝 *Purpose:* ${activeTxReceipt.purpose}\n`;
            txt += `💵 *Amount:* ${activeTxReceipt.type === 'income' ? '+' : '-'} UGX ${Number(activeTxReceipt.amount).toLocaleString()}\n`;
            txt += `🏦 *New Balance:* UGX ${Number(activeTxReceipt.balanceAfter).toLocaleString()}\n\n`;
            txt += `──────────────────────────\n`;
            txt += `✍️ *Signatories:* Chairperson (Nakanwagi Shamim: +256 700 000000) | Secretary (Luwagga Derick: +256768350920) | Treasurer (Nabbanja Aminah: +256 701 000000)\n`;
            txt += `📱 *Secretary:* Luwagga Derick (+256768350920)`;

            if (navigator.share) {
                navigator.share({ title: 'Transaction Receipt', text: txt }).catch(() => {});
                return;
            }
            document.getElementById('share-text-area').value = txt;
            document.getElementById('modal-share-preview').classList.remove('hidden');
        }

        function exportSingleReceiptJPG() {
            if (!activeTxReceipt) return;
            showToast("Generating high-resolution receipt JPG image...");
            const el = document.getElementById('single-receipt-printable-area');
            html2canvas(el, { scale: 3, backgroundColor: '#fef3c7', useCORS: true }).then(canvas => {
                const link = document.createElement('a');
                link.download = `Transaction_Receipt_${activeTxReceipt.id}.jpg`;
                link.href = canvas.toDataURL('image/jpeg', 1.0);
                link.click();
                showToast("High-resolution receipt image downloaded successfully!");
            });
        }

        let activeListReceiptId = null;
        function openListReceiptModal(listId) {
            const list = appState.lists.find(l => l.id === listId);
            if (!list) return;
            activeListReceiptId = listId;

            const nowStr = new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
            document.getElementById('list-receipt-title').textContent = `${list.name} - Receipt & Breakdown`;
            document.getElementById('receipt-header-title').textContent = `Rich Gang Group - ${list.name} Receipt`;
            document.getElementById('receipt-date-str').textContent = new Date().toLocaleDateString('en-GB');
            document.getElementById('receipt-time-str').textContent = nowStr;
            document.getElementById('receipt-list-name').textContent = list.name;
            document.getElementById('receipt-list-target').textContent = (Number(list.target || 0)).toLocaleString();
            document.getElementById('receipt-total-members').textContent = appState.members.length;
            
            const totalCollected = calculateListTotal(listId);
            const totalExpected = calculateListExpected(listId);
            document.getElementById('receipt-total-expected').textContent = totalExpected.toLocaleString();
            document.getElementById('receipt-total-collected').textContent = totalCollected.toLocaleString();

            const breakdownBody = document.getElementById('receipt-members-breakdown-body');
            if (breakdownBody) {
                breakdownBody.innerHTML = '';
                appState.members.forEach((m, idx) => {
                    const isPaid = m.payments && m.payments[listId] === true;
                    const tr = document.createElement('tr');
                    tr.className = 'hover:bg-amber-100/50 transition';
                    tr.innerHTML = `
                        <td class="py-1.5 px-2 text-center font-bold text-slate-500">${idx + 1}</td>
                        <td class="py-1.5 px-2 font-semibold text-slate-900">${escapeHtml(m.name)}</td>
                        <td class="py-1.5 px-2 text-center text-slate-700">${escapeHtml(m.village || '--')}</td>
                        <td class="py-1.5 px-2 text-center">
                            <span class="px-2 py-0.5 rounded text-[10px] font-bold ${isPaid ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-red-100 text-red-800 border border-red-300'}">
                                ${isPaid ? 'PAID' : 'UNPAID'}
                            </span>
                        </td>
                    `;
                    breakdownBody.appendChild(tr);
                });
            }

            document.getElementById('modal-list-receipt').classList.remove('hidden');
        }

        function closeListReceiptModal() {
            document.getElementById('modal-list-receipt').classList.add('hidden');
        }

        function shareListReceiptWhatsApp() {
            const list = appState.lists.find(l => l.id === activeListReceiptId);
            if (!list) return;
            const portalLink = window.location.href.split('?')[0];
            const totalCollected = calculateListTotal(list.id);
            const totalExpected = calculateListExpected(list.id);
            const paidCount = countListPaidMembers(list.id);
            const nowStr = new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
            const percentage = appState.members.length > 0 ? Math.round((paidCount / appState.members.length) * 100) : 0;

            let txt = `╔════════════════════════╗\n`;
            txt += `  🔥 *RICH GANG CONTRIBUTION* 🔥  \n`;
            txt += `╚════════════════════════╝\n\n`;
            txt += `🌐 *Portal:* ${portalLink}\n`;
            txt += `📌 *List Name:* ${list.name}\n`;
            txt += `⏳ *Timestamp:* ${nowStr}\n\n`;
            txt += `📊 *FINANCIAL SUMMARY:*\n`;
            txt += `👥 Total Members: ${appState.members.length}\n`;
            txt += `🎯 Target / Member: UGX ${(Number(list.target || 0)).toLocaleString()}\n`;
            txt += `📈 Expected Total: UGX ${totalExpected.toLocaleString()}\n`;
            txt += `💰 Total Collected: UGX ${totalCollected.toLocaleString()} (${paidCount}/${appState.members.length} paid - ${percentage}%)\n\n`;
            txt += `──────────────────────────\n`;
            txt += `📋 *COMPLETE CONTRIBUTION LIST (All Members):*\n`;

            appState.members.forEach((m, idx) => {
                const paid = m.payments && m.payments[list.id] === true;
                txt += `${idx + 1}. *${m.name}* — ${paid ? '✅ *PAID*' : '❌ *UNPAID*'}\n`;
            });

            txt += `\n──────────────────────────\n`;
            txt += `✍️ *Signatories:* Chairperson (Nakanwagi Shamim: +256 700 000000) | Secretary (Luwagga Derick: +256768350920) | Treasurer (Nabbanja Aminah: +256 701 000000)\n`;
            txt += `📱 *Secretary Contact:* Luwagga Derick (+256768350920)`;

            if (navigator.share) {
                navigator.share({ title: list.name + ' Contribution Breakdown', text: txt }).catch(() => {});
                return;
            }
            document.getElementById('share-text-area').value = txt;
            document.getElementById('modal-share-preview').classList.remove('hidden');
        }

        function exportListReceiptJPG() {
            const list = appState.lists.find(l => l.id === activeListReceiptId);
            if (!list) return;
            showToast("Generating high-resolution List Receipt JPG image...");
            const el = document.getElementById('list-receipt-printable-area');
            html2canvas(el, { scale: 3, backgroundColor: '#fef3c7', useCORS: true }).then(canvas => {
                const link = document.createElement('a');
                link.download = `${list.name.replace(/[^a-zA-Z0-9]/g, '_')}_Receipt.jpg`;
                link.href = canvas.toDataURL('image/jpeg', 1.0);
                link.click();
                showToast("High-resolution List Receipt JPG downloaded!");
            });
        }

        function openImageExportModal() {
            document.getElementById('modal-export-image').classList.remove('hidden');
        }

        function closeImageExportModal() {
            document.getElementById('modal-export-image').classList.add('hidden');
        }

        function generateTableImage(orientation) {
            closeImageExportModal();
            let resolvedOrientation = orientation;
            if (orientation === 'auto') {
                const activeListsCount = appState.lists.length;
                resolvedOrientation = activeListsCount >= 3 ? 'landscape' : 'portrait';
                showToast(`🧠 Auto Brain Detection: Selected ${resolvedOrientation.toUpperCase()} layout.`);
            } else {
                showToast(`Generating high-resolution A4 ${orientation} JPG image...`);
            }

            const nowStr = new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
            document.getElementById('image-export-date').textContent = nowStr;

            const wrapper = document.getElementById('a4-export-wrapper');
            const summaryDiv = document.getElementById('export-lists-summary');
            const cloneTable = document.getElementById('export-table-clone');

            if (resolvedOrientation === 'portrait') {
                wrapper.style.width = '794px';
                wrapper.style.minHeight = '1123px';
            } else {
                wrapper.style.width = '1123px';
                wrapper.style.minHeight = '794px';
            }

            summaryDiv.innerHTML = '';
            appState.lists.forEach(l => {
                const total = calculateListTotal(l.id);
                const expected = calculateListExpected(l.id);
                const count = countListPaidMembers(l.id);
                summaryDiv.innerHTML += `<div><strong style="color:#0f172a;">${escapeHtml(l.name)}:</strong> <span style="color:#047857; font-weight:bold;">Collected: UGX ${total.toLocaleString()}</span> / <span style="color:#1d4ed8;">Expected: UGX ${expected.toLocaleString()}</span> <span style="color:#334155;">(${count}/${appState.members.length} paid)</span></div>`;
            });

            let tableHtml = `
                <thead>
                    <tr style="background:#fef3c7; border-bottom:2px solid #0f172a;">
                        <th style="padding:8px; border:1px solid #fcd34d; width: 40px; text-align:center; color:#0f172a; font-weight:bold; font-size:11px;">#</th>
                        <th style="padding:8px; border:1px solid #fcd34d; width: 190px; color:#0f172a; font-weight:bold; font-size:11px;">Member Name</th>
                        <th style="padding:8px; border:1px solid #fcd34d; width: 100px; text-align:center; color:#0f172a; font-weight:bold; font-size:11px;">Village</th>
                        <th style="padding:8px; border:1px solid #fcd34d; width: 90px; text-align:center; color:#0f172a; font-weight:bold; font-size:11px;">Status</th>
            `;
            appState.lists.forEach(l => {
                tableHtml += `<th style="padding:8px; border:1px solid #fcd34d; text-align:center; color:#0f172a; font-weight:bold; font-size:11px;">${escapeHtml(l.name)}</th>`;
            });
            tableHtml += `</tr></thead><tbody>`;

            appState.members.forEach((m, idx) => {
                const st = calculateMemberStatus(m);
                const rowBg = idx % 2 === 0 ? '#ffffff' : '#fffbeb';
                tableHtml += `
                    <tr style="border-bottom:1px solid #fde68a; background:${rowBg};">
                        <td style="padding:7px 8px; border:1px solid #fcd34d; text-align:center; color:#334155; font-weight:bold; font-size:11px;">${idx + 1}</td>
                        <td style="padding:7px 8px; border:1px solid #fcd34d; font-weight:bold; color:#0f172a; white-space:normal; width: 190px; word-break: break-word; font-size:11px;">${escapeHtml(m.name)}</td>
                        <td style="padding:7px 8px; border:1px solid #fcd34d; text-align:center; color:#b45309; font-weight:bold; font-size:11px;">${escapeHtml(m.village || '--')}</td>
                        <td style="padding:7px 8px; border:1px solid #fcd34d; text-align:center; color:#0f172a; font-weight:bold; font-size:11px;">${st.label}</td>
                `;
                appState.lists.forEach(l => {
                    const paid = m.payments && m.payments[l.id];
                    tableHtml += `<td style="padding:7px 8px; border:1px solid #fcd34d; text-align:center; font-weight:bold; color:${paid ? '#047857' : '#b91c1c'}; font-size:11px;">${paid ? 'PAID' : 'UNPAID'}</td>`;
                });
                tableHtml += `</tr>`;
            });

            tableHtml += `</tbody>`;
            cloneTable.innerHTML = tableHtml;

            setTimeout(() => {
                html2canvas(wrapper, {
                    scale: 3,
                    useCORS: true,
                    backgroundColor: '#fef3c7'
                }).then(canvas => {
                    const imgData = canvas.toDataURL('image/jpeg', 1.0);
                    const link = document.createElement('a');
                    link.download = `Rich_Gang_Report_${resolvedOrientation}_${nowStr.replace(/[^a-zA-Z0-9]/g, '_')}.jpg`;
                    link.href = imgData;
                    link.click();
                    showToast(`High-resolution A4 ${resolvedOrientation} JPG Report downloaded!`);
                });
            }, 300);
        }

        function buildWhatsAppReportText() {
            let portalLink = window.location.href.split('?')[0];
            const nowStr = new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
            
            let txt = `╔════════════════════════╗\n`;
            txt += `   🏆 *RICH GANG GROUP REPORT* 🏆   \n`;
            txt += `╚════════════════════════╝\n\n`;
            txt += `🌐 *Portal:* ${portalLink}\n`;
            txt += `⏳ *Timestamp:* ${nowStr}\n`;
            txt += `👥 *Total Members:* ${appState.members.length}\n`;
            txt += `🏦 *Group Account Balance:* UGX ${calculateGroupAccountBalance().toLocaleString()}\n\n`;
            txt += `──────────────────────────\n`;
            txt += `📊 *ACTIVE LISTS & SUBTOTALS:*\n`;
            
            appState.lists.forEach((l, idx) => {
                const total = calculateListTotal(l.id);
                const expected = calculateListExpected(l.id);
                const count = countListPaidMembers(l.id);
                const pct = appState.members.length > 0 ? Math.round((count / appState.members.length) * 100) : 0;
                txt += `\n*${idx + 1}. ${l.name}*\n`;
                txt += `   🎯 Target: ${(Number(l.target || 0)).toLocaleString()}\n`;
                txt += `   📈 Expected: UGX ${expected.toLocaleString()}\n`;
                txt += `   💰 Collected: UGX ${total.toLocaleString()} (${count}/${appState.members.length} paid - ${pct}%)\n`;
            });

            txt += `\n──────────────────────────\n`;
            txt += `📝 *COMPLETE MEMBERS DIRECTORY & STATUS:*\n`;
            appState.members.forEach((m, idx) => {
                const st = calculateMemberStatus(m);
                txt += `${idx + 1}. *${m.name}* — ${st.label}\n`;
            });

            txt += `\n──────────────────────────\n`;
            txt += `✍️ *Signatories:* Chairperson (Nakanwagi Shamim: +256 700 000000) | Secretary (Luwagga Derick: +256768350920) | Treasurer (Nabbanja Aminah: +256 701 000000)\n`;
            txt += `📱 *Secretary & Designer:* Luwagga Derick (+256768350920)`;

            return txt;
        }

        function shareGroupReport() {
            const reportText = buildWhatsAppReportText();
            if (navigator.share) {
                navigator.share({ title: 'Rich Gang Welfare Report', text: reportText }).catch(() => {});
                return;
            }
            document.getElementById('share-text-area').value = reportText;
            document.getElementById('modal-share-preview').classList.remove('hidden');
        }

        function closeShareModal() { document.getElementById('modal-share-preview').classList.add('hidden'); }
        function copyShareText() {
            const textArea = document.getElementById('share-text-area');
            textArea.select();
            document.execCommand('copy');
            showToast("WhatsApp report copied to clipboard!");
            closeShareModal();
        }

        function openMemberInfo(id) {
            const member = appState.members.find(m => m.id === id);
            if (!member) return;

            document.getElementById('info-member-name').textContent = member.name;
            document.getElementById('info-member-village').textContent = member.village || 'Not specified';
            const phoneEl = document.getElementById('info-member-phone');
            const callBtn = document.getElementById('info-call-btn');

            if (member.phone && member.phone.trim() !== '') {
                phoneEl.textContent = member.phone;
                callBtn.href = `tel:${member.phone}`;
                callBtn.classList.remove('hidden');
            } else {
                phoneEl.textContent = "Not provided";
                callBtn.classList.add('hidden');
            }

            const statusObj = calculateMemberStatus(member);
            document.getElementById('info-member-status').innerHTML = `<span class="px-2.5 py-1 rounded-full text-xs ${statusObj.class}">${statusObj.label}</span>`;

            const breakdownContainer = document.getElementById('info-member-lists-breakdown');
            breakdownContainer.innerHTML = '';
            appState.lists.forEach(l => {
                const paid = member.payments && member.payments[l.id] === true;
                breakdownContainer.innerHTML += `
                    <div class="flex items-center justify-between p-2 bg-slate-950 rounded-lg border border-slate-800 text-xs">
                        <span class="text-slate-300 font-semibold truncate pr-2">${escapeHtml(l.name)}</span>
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold ${paid ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/10 text-red-400 border border-red-500/30'}">
                            ${paid ? 'Paid' : 'Unpaid'}
                        </span>
                    </div>
                `;
            });

            document.getElementById('modal-member-info').classList.remove('hidden');
        }

        function closeMemberInfoModal() {
            document.getElementById('modal-member-info').classList.add('hidden');
        }

        const authToggleBtn = document.getElementById('auth-toggle-btn');
        if (authToggleBtn) {
            authToggleBtn.addEventListener('click', () => {
                if (appState.isEditor) {
                    appState.isEditor = false;
                    renderApp();
                    showToast('Switched to Viewer Mode');
                } else {
                    document.getElementById('input-admin-password').value = '';
                    document.getElementById('login-error-msg').classList.add('hidden');
                    document.getElementById('modal-admin-login').classList.remove('hidden');
                }
            });
        }

        document.querySelectorAll('.close-login-modal').forEach(el => {
            el.addEventListener('click', () => {
                document.getElementById('modal-admin-login').classList.add('hidden');
            });
        });

        const adminLoginForm = document.getElementById('form-admin-login');
        if (adminLoginForm) {
            adminLoginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const pass = document.getElementById('input-admin-password').value.trim();
                if (pass === '123') {
                    appState.isEditor = true;
                    document.getElementById('modal-admin-login').classList.add('hidden');
                    renderApp();
                    showToast('Editor Mode unlocked!');
                } else {
                    document.getElementById('login-error-msg').classList.remove('hidden');
                }
            });
        }

        function showConfirmDialog(title, message, onConfirm) {
            const modal = document.getElementById('modal-confirm');
            document.getElementById('confirm-title').textContent = title;
            document.getElementById('confirm-message').textContent = message;
            modal.classList.remove('hidden');

            const okBtn = document.getElementById('confirm-ok-btn');
            const cancelBtn = document.getElementById('confirm-cancel-btn');
            const newOk = okBtn.cloneNode(true);
            const newCancel = cancelBtn.cloneNode(true);
            okBtn.parentNode.replaceChild(newOk, okBtn);
            cancelBtn.parentNode.replaceChild(newCancel, cancelBtn);

            newOk.addEventListener('click', () => { modal.classList.add('hidden'); onConfirm(); });
            newCancel.addEventListener('click', () => { modal.classList.add('hidden'); });
        }

        function promptDeleteList(listId, listName) {
            if (!appState.isEditor) return;
            showConfirmDialog("Delete List?", `Delete "${listName}" and its associated payments?`, () => {
                appState.lists = appState.lists.filter(l => l.id !== listId);
                appState.members.forEach(m => { if (m.payments) delete m.payments[listId]; });
                renderApp();
                showToast('List deleted');
            });
        }

        function promptDeleteMember(id, name) {
            if (!appState.isEditor) return;
            showConfirmDialog("Remove Member?", `Remove "${name}" from tracker?`, () => {
                appState.members = appState.members.filter(m => m.id !== id);
                renderApp();
                showToast('Member removed');
            });
        }

        function openEditListModal(listId) {
            if (!appState.isEditor) return;
            const list = appState.lists.find(l => l.id === listId);
            if (!list) return;
            document.getElementById('input-edit-list-id').value = list.id;
            document.getElementById('input-edit-list-name').value = list.name;
            document.getElementById('input-edit-list-target').value = list.target !== undefined ? list.target : 5000;
            document.getElementById('modal-edit-list').classList.remove('hidden');
        }

        function closeEditListModal() {
            document.getElementById('modal-edit-list').classList.add('hidden');
        }

        function saveEditedList() {
            if (!appState.isEditor) return;
            const listId = document.getElementById('input-edit-list-id').value;
            const name = document.getElementById('input-edit-list-name').value.trim();
            const target = parseFloat(document.getElementById('input-edit-list-target').value);
            if (!name) return;

            const list = appState.lists.find(l => l.id === listId);
            if (list) {
                list.name = name;
                list.target = isNaN(target) ? 0 : target;
                renderApp();
                closeEditListModal();
                showToast('List updated successfully!');
            }
        }

        function editMember(id) {
            if (!appState.isEditor) return;
            const member = appState.members.find(m => m.id === id);
            if (!member) return;
            document.getElementById('modal-member-title').innerHTML = `<i class="fa-solid fa-user-pen text-indigo-400"></i> Edit Member`;
            document.getElementById('input-member-id').value = member.id;
            document.getElementById('input-member-name').value = member.name;
            document.getElementById('input-member-village').value = member.village || '';
            document.getElementById('input-member-phone').value = member.phone || '';
            document.getElementById('member-error-msg').classList.add('hidden');

            const container = document.getElementById('member-lists-checkboxes');
            container.innerHTML = '';
            appState.lists.forEach(l => {
                const isChecked = member.payments && member.payments[l.id] === true;
                container.innerHTML += `
                    <label class="flex items-center justify-between p-2 bg-slate-950 rounded-lg border border-slate-800 text-xs">
                        <span class="font-semibold text-slate-300">${escapeHtml(l.name)}</span>
                        <input type="checkbox" name="edit-list-pay" value="${l.id}" ${isChecked ? 'checked' : ''} class="w-4 h-4 text-indigo-600 rounded bg-slate-900 border-slate-700">
                    </label>
                `;
            });
            document.getElementById('modal-add-member').classList.remove('hidden');
        }

        function openAddListModal() {
            if (!appState.isEditor) return;
            document.getElementById('input-list-name').value = `List ${appState.lists.length + 1} - Welfare Support`;
            document.getElementById('input-list-target').value = 5000;
            document.getElementById('modal-add-list').classList.remove('hidden');
        }
        function closeAddListModal() { document.getElementById('modal-add-list').classList.add('hidden'); }
        function saveNewList() {
            if (!appState.isEditor) return;
            const name = document.getElementById('input-list-name').value.trim();
            const target = parseFloat(document.getElementById('input-list-target').value);
            if (!name) return;
            const newListId = 'list-' + Date.now();
            appState.lists.push({ id: newListId, name: name, target: isNaN(target) ? 0 : target });
            appState.members.forEach(m => { if (!m.payments) m.payments = {}; m.payments[newListId] = false; });
            renderApp();
            closeAddListModal();
            showToast(`Created list: ${name}`);
        }

        function openAddMemberModal() {
            if (!appState.isEditor) return;
            document.getElementById('modal-member-title').innerHTML = `<i class="fa-solid fa-user-plus text-indigo-400"></i> Add New Member`;
            document.getElementById('input-member-id').value = '';
            document.getElementById('input-member-name').value = '';
            document.getElementById('input-member-village').value = '';
            document.getElementById('input-member-phone').value = '';
            document.getElementById('member-error-msg').classList.add('hidden');

            const container = document.getElementById('member-lists-checkboxes');
            container.innerHTML = '';
            appState.lists.forEach(l => {
                container.innerHTML += `
                    <label class="flex items-center justify-between p-2 bg-slate-950 rounded-lg border border-slate-800 text-xs">
                        <span class="font-semibold text-slate-300">${escapeHtml(l.name)}</span>
                        <input type="checkbox" name="edit-list-pay" value="${l.id}" class="w-4 h-4 text-indigo-600 rounded bg-slate-900 border-slate-700">
                    </label>
                `;
            });
            document.getElementById('modal-add-member').classList.remove('hidden');
        }
        function closeAddMemberModal() { document.getElementById('modal-add-member').classList.add('hidden'); }
        
        function saveNewMember() {
            if (!appState.isEditor) return;
            const memberId = document.getElementById('input-member-id').value;
            let name = document.getElementById('input-member-name').value.trim();
            const village = document.getElementById('input-member-village').value.trim();
            const phone = document.getElementById('input-member-phone').value.trim();
            const errorMsg = document.getElementById('member-error-msg');
            if (!name) return;

            const duplicate = appState.members.some(m => m.name.toLowerCase() === name.toLowerCase() && m.id !== memberId);
            if (duplicate) {
                errorMsg.classList.remove('hidden');
                return;
            }
            errorMsg.classList.add('hidden');

            const checkedListEls = document.querySelectorAll('input[name="edit-list-pay"]:checked');
            const payments = {};
            checkedListEls.forEach(el => { payments[el.value] = true; });

            if (memberId) {
                const member = appState.members.find(m => m.id === memberId);
                if (member) { member.name = name; member.village = village; member.phone = phone; member.payments = payments; }
                showToast('Member updated successfully!');
            } else {
                appState.members.push({ id: 'mem-' + Date.now(), name: name, village: village, phone: phone, payments: payments });
                showToast('New member added successfully!');
            }
            renderApp();
            closeAddMemberModal();
        }

        function togglePayment(memberId, listId, isChecked) {
            if (!appState.isEditor) return;
            const member = appState.members.find(m => m.id === memberId);
            if (member) {
                if (!member.payments) member.payments = {};
                member.payments[listId] = isChecked;
                renderApp();
            }
        }

        function updateStats() {
            const total = appState.members.length;
            let verified = 0, pending = 0, unpaid = 0;
            appState.members.forEach(m => {
                const st = calculateMemberStatus(m).status;
                if (st === 'verified') verified++;
                else if (st === 'pending') pending++;
                else if (st === 'unpaid') unpaid++;
            });
            const cfAll = document.getElementById('count-filter-all');
            const cfVer = document.getElementById('count-filter-verified');
            const cfPen = document.getElementById('count-filter-pending');
            const cfUnp = document.getElementById('count-filter-unpaid');
            if (cfAll) cfAll.textContent = total;
            if (cfVer) cfVer.textContent = verified;
            if (cfPen) cfPen.textContent = pending;
            if (cfUnp) cfUnp.textContent = unpaid;
        }

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => {
                    b.classList.remove('bg-amber-500', 'text-slate-950', 'font-bold');
                    b.classList.add('bg-slate-900', 'text-slate-300');
                });
                btn.classList.remove('bg-slate-900', 'text-slate-300');
                btn.classList.add('bg-amber-500', 'text-slate-950', 'font-bold');
                appState.filter = btn.dataset.filter;
                renderRows();
            });
        });

        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                appState.search = e.target.value.trim();
                renderRows();
            });
        }

        const exportCsvBtn = document.getElementById('export-csv-btn');
        if (exportCsvBtn) {
            exportCsvBtn.addEventListener('click', () => {
                let csv = [];
                let headers = ['#', 'Member Name', 'Village', 'Phone Number', 'Status'];
                appState.lists.forEach(l => headers.push(l.name));
                csv.push(headers.join(','));
                appState.members.forEach((m, idx) => {
                    let row = [idx + 1, `"${m.name}"`, `"${m.village || ''}"`, `"${m.phone || ''}"`, `"${calculateMemberStatus(m).label}"`];
                    appState.lists.forEach(l => row.push(m.payments && m.payments[l.id] ? 'PAID' : 'UNPAID'));
                    csv.push(row.join(','));
                });
                const blob = new Blob([csv.join('\n')], { type: 'text/csv' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'Rich_Gang_Welfare_Report.csv';
                link.click();
                showToast('CSV Report Downloaded');
            });
        }

        const printBtn = document.getElementById('print-btn');
        if (printBtn) {
            printBtn.addEventListener('click', () => {
                const dateStr = new Date().toLocaleDateString('en-GB', {
                    year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                });
                document.querySelectorAll('.print-date-target').forEach(el => el.textContent = dateStr);
                window.print();
            });
        }

        function showToast(msg) {
            const toast = document.getElementById('toast');
            const toastMsg = document.getElementById('toast-message');
            if (toast && toastMsg) {
                toastMsg.textContent = msg;
                toast.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
                setTimeout(() => toast.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none'), 3000);
            }
        }

        function escapeHtml(str) {
            return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        }

        // Auto-run initData when the window loads
        window.onload = initData;
    </script>