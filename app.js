// ======================================================
// IMPORTS (ordre logique)
// ======================================================

// 1) Carte + layers
import { initMap } from "./js/map.js";

// 2) Modules fonctionnels
import { loadMetar } from "./js/metar.js";
import { loadTaf } from "./js/taf.js";
import { loadFids } from "./js/fids.js";

// 3) UI
import { initUI } from "./js/ui.js";

// 4) Heatmap
import { initHeatmapToggle, initHeatmapHistory } from "./js/sonometers.js";

// 5) Clusters + debug
import { initClusterToggle } from "./js/map.js";
import { initDebugPanel } from "./js/map.js";

// 6) Runways (important : doit être chargé AVANT METAR)
import "./js/runways.js";


// ======================================================
// INITIALISATION
// ======================================================

window.onload = () => {

    // 1) Initialisation carte + layers globaux
    window.map = initMap();

    // 2) UI
    initUI();

    // 3) Heatmap
    initHeatmapToggle(window.map);
    initHeatmapHistory(window.map);

    // 4) Clusters
    initClusterToggle(window.map);

    // 5) Debug
    initDebugPanel(window.map);

    // 6) Données
    loadMetar();
    loadTaf();
    loadFids();
};
