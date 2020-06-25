import React, { useState } from "react";
import { Container, TextField, Button, InputProps } from "@material-ui/core";
import "./index.scss";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Apis from "./services";

const theme = createMuiTheme({
    typography: {
        // Use the system font.
        fontFamily: "Indie Flower",
        fontSize: 24,
    },
});

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: "#ff7f50",
        border: "none",
        color: "white",
        padding: "0px 20px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer",
    },
    textarea: {
        resize: "none",
        height: "650px",
        width: "100%",
        background: "transparent",
        outline: "none",
        border: "none",
        borderBottom: "none",
        margin: "10px",
        fontSize: "24px",
        marginTop: "5px",
    },
}));

const App = (props) => {
    const [showHideToggler, setShowHideToggler] = useState(false);
    const [noteText, setNoteText] = useState("");
    const classes = useStyles(props);

    window.addEventListener("message", (event) => {
        if (event.data.action === "openNotepad") {
            setShowHideToggler(true);
        } else if (event.data.action === "closeNotepad") {
            setShowHideToggler(false);
        } else if (event.data.action === "openNotepadRead") {
          setShowHideToggler(true);
          setNoteText(event.data.text);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.keyCode === 27) {
            setShowHideToggler(false);
            Apis.escapeNotepad();
        }
    });

    const drop = () => {
        setShowHideToggler(false);
        Apis.updateNotepad(noteText);
        setNoteText("");
    };

    return (
        <div className={showHideToggler ? "container" : "hide-container"}>
            <ThemeProvider theme={theme}>
                <Container className="notepad">
                    <TextField
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                        className={classes.textarea}
                        placeholder="Notes"
                        autoFocus={true}
                        multiline={true}
                        InputProps={{ disableUnderline: true }}
                    ></TextField>
                    <Button className={classes.button} onClick={drop}>
                        Drop
                    </Button>
                </Container>
            </ThemeProvider>
        </div>
    );
};

export default App;
