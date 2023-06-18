import {
  Box,
  Button,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@ui/atoms";
import { FC } from "react";

const NgoPage: FC = () => {
  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between" pb="37px">
        <Typography>Moje NGO</Typography>
        <Button>Edytuj profil</Button>
      </Stack>
      <Stack pb="16px" direction="row" gap="20px">
        <Box
          sx={{ width: "468px", padding: "16px", border: "1px solid #EAECF0", borderRadius: "8px" }}
        >
          <Typography pb="24px">#stowarzyszenie_rejestrowe #ekologia</Typography>
          <Typography pb="12px">Fundacja Zrównoważony Rozwój</Typography>
          <Typography pb="24px">
            Celem stowarzyszenia jest propagowanie kultury fizycznej na rzecz dzieci i młodzieży
            samorządu lokalnego oraz na podstawie zlecenia realizacji zadań publicznych, wskazywanie
            pozytywnych kierunków i wzorców rozwoju osobowości dzieci i młodzieży, pogłębianie ich
            wiedzy i umiejętności oraz rozwijanie uzdolnień i zainteresowań w zakresie kultury,
            kultury fizycznej, sportu, rekreacji, sztuki, krajoznawstwa i turystyki.
          </Typography>
          <Stack direction="row" alignItems="flex-start" gap="72px" pb="24px">
            <Box>
              <Typography pb="12px">Adres</Typography>
              <Typography>ul. Świerkowa 1 36-342 Kołobrzeg</Typography>
            </Box>
            <Box>
              <Typography pb="12px">Adres e-mail</Typography>
              <Typography>nazwa@domena.pl</Typography>
            </Box>
          </Stack>
          <Box sx={{ paddingBottom: "24px" }}>
            <Typography pb="12px">Telefon</Typography>
            <Typography>(+48) 123-456-789</Typography>
          </Box>
          <Box sx={{ paddingBottom: "24px" }}>
            <Typography pb="12px">Oferta</Typography>
            <Typography>
              organizowanie warsztatów o zrównoważonym rozwoju edukacja szkolna w zakresie
              środowiska
            </Typography>
          </Box>
          <Box>
            <Typography pb="12px">Zasoby</Typography>
            <Typography>mobilny sprzęt komputerowy namiot, stół stoiskowy</Typography>
          </Box>
        </Box>
        <Box>
          <Stack direction="row" gap="20px" pb="24px">
            <Box
              sx={{
                width: "500px",
                height: "408px",
                padding: "16px",
                border: "1px solid #EAECF0",
                borderRadius: "8px"
              }}
            >
              <Typography>Moje najbliższe wydarzenia</Typography>
              <Skeleton animation="wave" height={330} width={250} variant="rectangular" />
            </Box>
            <Box
              sx={{
                maxWidth: "500px",
                height: "408px",
                padding: "16px",
                border: "1px solid #EAECF0",
                borderRadius: "8px"
              }}
            >
              <Typography>Baza wiedzy</Typography>
              <Stack direction="row">
                <Stack sx={{ width: "145px", height: "144px" }}>
                  <Skeleton animation="wave" height={48} width={48} variant="rectangular" />
                  <Typography>Dokumenty statutowe</Typography>
                </Stack>
                <Stack sx={{ width: "145px", height: "144px" }}>
                  <Skeleton animation="wave" height={48} width={48} variant="rectangular" />
                  <Typography>Dokumenty statutowe</Typography>
                </Stack>
                <Stack sx={{ width: "145px", height: "144px" }}>
                  <Skeleton animation="wave" height={48} width={48} variant="rectangular" />
                  <Typography>Dokumenty statutowe</Typography>
                </Stack>
                <Stack sx={{ width: "145px", height: "144px" }}>
                  <Skeleton animation="wave" height={48} width={48} variant="rectangular" />
                  <Typography>Dokumenty statutowe</Typography>
                </Stack>
                <Stack sx={{ width: "145px", height: "144px" }}>
                  <Skeleton animation="wave" height={48} width={48} variant="rectangular" />
                  <Typography>Dokumenty statutowe</Typography>
                </Stack>
              </Stack>
            </Box>
          </Stack>
          <Box
            sx={{
              width: "1020px",
              height: "264px",
              padding: "16px",
              border: "1px solid #EAECF0",
              borderRadius: "8px"
            }}
          >
            <Typography pb="12px">Moje projekty</Typography>
            <Stack
              p="20px 24px"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ border: "1px solid #EAECF0", borderRadius: "8px" }}
            >
              <Typography>Promocja zrównoważonego rozwoju</Typography>
              <Button>Przejdź do projektu</Button>
            </Stack>
            <Typography pb="12px">Współtworzone projekty</Typography>
            <Stack
              p="20px 24px"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ border: "1px solid #EAECF0", borderRadius: "8px" }}
            >
              <Typography>PZrównoważony piknik rodzinny</Typography>
              <Button>Przejdź do projektu</Button>
            </Stack>
          </Box>
        </Box>
      </Stack>
      <Box
        sx={{
          width: "1000px",
          height: "224px",
          border: "1px solid #EAECF0",
          borderRadius: "8px",
          padding: "16px"
        }}
      >
        <Typography>Wysłane formularze</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nazwa wiadomości</TableCell>
                <TableCell>Data wysłania</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Odpowiedź</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Dodanie informacji do bazy wiedzy NGO</TableCell>
                <TableCell>20.05.2023</TableCell>
                <TableCell>Rozwiązany</TableCell>
                <TableCell>Odpowiedź.pdf</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dodanie informacji do bazy wiedzy NGO</TableCell>
                <TableCell>20.05.2023</TableCell>
                <TableCell>Utworzone</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default NgoPage;
