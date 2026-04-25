
import type { Icard } from "../components/customTypes/Icard"
//avatars
import defaultAvatar from '../assets/composturaLogos/composturalogoblack.png'
import avatarEsguince from '../assets/cardavatars/esguinceavatar2026, 22_56_13.png'
//card images
import esguince from '../assets/cardimages/esguince2026, 22_52_19.png'
import lumbar from '../assets/cardimages/lumbar2026, 23_04_28.png'
import articulaciones from '../assets/cardimages/articulaciones2026, 22_53_45.png'

export const CardDataArray:Icard[] = [
    {
        avatar: avatarEsguince,
        title: "Esguince de Tobillo",
        category: "REHABILITACION",
        imgPath: esguince,
        textInfo: `
            En Compostura te ayudamos a recuperarte de un esguince de forma segura y 
            efectiva. Disminuye el dolor, mejora tu movilidad y prevén futuras lesiones
            con una valoración personalizada. Agenda tu cita y vuelve a moverte con confianza.
        `
    },
    {
        avatar: defaultAvatar,
        title: "Dolor Lumbar",
        category: "REHABILITACION",
        imgPath: lumbar,
        textInfo: `
            En Compostura te ayudamos a aliviar el dolor lumbar desde la raíz, mejorando 
            tu movilidad y reduciendo la tensión en tu día a día. Nuestro enfoque de 
            fisioterapia es personalizado para que recuperes tu bienestar de forma segura 
            y efectiva. Agenda tu valoración y vuelve a moverte sin molestias.
        `
    },
    {
        avatar: defaultAvatar,
        title: "Dolor de manos y articulaciones",
        category: "REHABILITACION",
        imgPath: articulaciones,
        textInfo: `
            En Compostura te ayudamos a aliviar el dolor en las articulaciones 
            y recuperar tu movilidad con un tratamiento de fisioterapia personalizado. 
            Trabajamos para reducir la inflamación, mejorar tu flexibilidad y prevenir 
            futuras molestias. Agenda tu valoración y vuelve a moverte con libertad.
        `
    }
]


