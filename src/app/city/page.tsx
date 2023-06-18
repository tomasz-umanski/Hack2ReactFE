"use client";

import { Box, Button, FormControl, Skeleton, Stack, TextField, Typography } from "@ui/atoms";
import axios from "axios";
import React, { ChangeEvent, FC, useState } from "react";

const api = axios.create({
  baseURL: "http://localhost:8080"
});

const CityFormPage: FC = () => {
  const [topic, setTopic] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const inputTopic = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setTopic(e.target.value);
  };

  const inputCategory = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setCategory(e.target.value);
  };

  const inputContent = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setContent(e.target.value);
  };

  const sendMessage = async () => {
    await api
      .post("/workspace", {
        name: "Jan Kowalski",
        organization: "UKS",
        topic,
        category,
        content
      })
      .then(() => {
        setTopic("");
        setCategory("");
        setContent("");
      });
  };

  const confirmForm = () => {
    void sendMessage();
  };

  return (
    <Box sx={{ padding: "5px 176px 0 176px" }}>
      <Stack direction="column" alignContent="center" justifyContent="center">
        <Skeleton animation="wave" height={100} width={85} variant="rectangular" />
        <Typography>Skontaktuj się</Typography>
        <Typography>Formularz kontaktowy</Typography>
        <Typography>
          Wypełnij ten formularz, jeśli chcesz skontaktować się z pracownikami Urzędu Miasta. Twoja
          komunikacja będzie kontynuowana poprzez podany adres e-mail.
        </Typography>
        <FormControl>
          <TextField
            value={topic}
            placeholder="topic"
            id="navigationSearch"
            type="text"
            onChange={inputTopic}
          />
          <TextField
            value={category}
            placeholder="category"
            id="navigationSearch"
            type="text"
            onChange={inputCategory}
          />
          <TextField
            value={content}
            placeholder="content"
            id="navigationSearch"
            type="text"
            onChange={inputContent}
          />
        </FormControl>
        <Button onClick={() => confirmForm()}>Wyślij wiadomość</Button>
      </Stack>
    </Box>
  );
};

export default CityFormPage;
