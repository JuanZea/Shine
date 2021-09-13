import {ref} from "vue";
import {filmsService} from "../services/filmsService";

const films = ref();

const refreshFilms = () => filmsService.all().then(response => {
    films.value = response;
});

export default function useFilms() {
    return {
        films,
        refreshFilms
    }
}