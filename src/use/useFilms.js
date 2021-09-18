import { ref } from "vue";
import { filmsService } from "../services/filmsService";
import debounce from "lodash/debounce";

const films = ref();
const options = ref(null);

const refreshFilms = debounce(async () => {
    films.value = await filmsService.all(options.value);
}, 200);

const setQuery = (query) => {
    if (!query) options.value = null;
    else options.value = { params: {contains: query}}
}

export default function useFilms() {
    return {
        films,
        refreshFilms,
        setQuery,
        options
    }
}