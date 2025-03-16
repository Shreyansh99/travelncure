import cardio from '../assets/cardio.png';
import hema from '../assets/hema.png';
import neuro from '../assets/neuro.png';
import onco from '../assets/onco.png';
import ortho from '../assets/ortho.png';

export const departments = [
    {name: "Hematology", icon: hema, },
    { name: "Oncology", icon: onco },
    { name: "Cardiology", icon: cardio },
    { name: "Orthopedic", icon: ortho },
    { name: "Neurology", icon: neuro },
];

export const treatments = {
    Hematology: ["Blood Disorders", "Anemia", "Leukemia"],
    Oncology: ["Cancer Treatment", "Radiation Therapy", "Chemotherapy"],
    Cardiology: ["Heart Diseases", "Angioplasty", "Cardiac Surgery"],
    Orthopedic: ["Joint Replacement", "Fracture Treatment", "Spinal Surgery"],
    Neurology: ["Neurological Disorders", "Stroke", "Epilepsy"],
};