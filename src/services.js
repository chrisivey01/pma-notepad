import axios from "axios";

const closeNotepadUrl = "http://pma-notepad/escape";
const updatingNotepadUrl = "http://pma-notepad/updating";

const Apis = {
    escapeNotepad: () => {
        return axios.post(closeNotepadUrl, {});
    },

    updateNotepad: (notepadId, text) => {
        const data = { notepadId: notepadId, text: text };
        return axios.post(updatingNotepadUrl, data);
    },
};

export default Apis;
