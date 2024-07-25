document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');

    function getChapterList() {
        return JSON.parse(localStorage.getItem('favoriteBOMChapters')) || [];
    }

    function setChapterList() {
        localStorage.setItem('favoriteBOMChapters', JSON.stringify(chaptersArray));
    }

    function displayList(item) {
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');
        li.textContent = item;
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
        });
    }

    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1);
        chaptersArray = chaptersArray.filter(item => item !== chapter);
        setChapterList();
    }

    let chaptersArray = getChapterList();

    chaptersArray.forEach(chapter => {
        displayList(chapter);
    });

    button.addEventListener('click', () => {
        if (input.value.trim() !== '') {
            displayList(input.value);
            chaptersArray.push(input.value);
            setChapterList();
            input.value = '';
            input.focus();
        } else {
            input.focus();
        }
    });
});