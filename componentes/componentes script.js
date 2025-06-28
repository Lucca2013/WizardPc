document.addEventListener('DOMContentLoaded', function () {
            const searchInput = document.getElementById('searchInput');
            const filterTags = document.getElementById('filterTags');
            const components = document.querySelectorAll('.componente-card');
            let selectedCategory = null;

            function filterComponents() {
                const term = searchInput.value.toLowerCase();
                components.forEach(card => {
                    const cat = card.querySelector('.componente-categoria').textContent;
                    const title = card.querySelector('.componente-titulo').textContent.toLowerCase();
                    const matchSearch = title.includes(term) || cat.toLowerCase().includes(term);
                    const matchCat = !selectedCategory || cat === selectedCategory;
                    card.classList.toggle('hidden', !(matchSearch && matchCat));
                });
            }
            searchInput.addEventListener('input', filterComponents);

            filterTags.querySelectorAll('.tag-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const cat = btn.getAttribute('data-category');
                    if (selectedCategory === cat) {
                        selectedCategory = null;
                        btn.classList.remove('active');
                    } else {
                        selectedCategory = cat;
                        filterTags.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                    }
                    filterComponents();
                });
            });
        });