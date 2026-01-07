export const cropData = [
  {
    id: 'wheat',
    name: 'Wheat',
    shortDesc: 'Staple grain crop for bread and flour',
    description:
      'Wheat is one of the most important cereal crops globally, used primarily for making flour for bread, pasta, and other food products. It thrives in temperate climates and requires well-drained soil.',
    image: '/assets/generated/wheat-crop.dim_400x300.jpg',
    season: 'Winter',
    difficulty: 'Easy',
    waterNeeds: 'Moderate',
    sunlight: 'Full Sun',
    soilTypes: ['Loamy', 'Clay'],
    tips: [
      'Plant in well-drained soil with pH 6.0-7.0',
      'Apply nitrogen fertilizer during tillering stage',
      'Ensure adequate irrigation during grain filling',
      'Harvest when moisture content is 12-14%',
    ],
    audioFiles: {
      en: '/assets/audio/wheat-en.mp3',
      ta: '/assets/audio/wheat-ta.mp3',
      ml: '/assets/audio/wheat-ml.mp3',
      te: '/assets/audio/wheat-te.mp3',
    },
  },
  {
    id: 'rice',
    name: 'Rice',
    shortDesc: 'Primary food crop for half the world',
    description:
      'Rice is a staple food for more than half of the world\'s population. It grows best in flooded fields and requires warm temperatures and high humidity throughout its growing season.',
    image: '/assets/generated/rice-paddy.dim_400x300.jpg',
    season: 'Summer',
    difficulty: 'Moderate',
    waterNeeds: 'High',
    sunlight: 'Full Sun',
    soilTypes: ['Clay', 'Loamy'],
    tips: [
      'Maintain 2-3 inches of standing water in fields',
      'Transplant seedlings at 3-4 weeks old',
      'Apply phosphorus fertilizer before planting',
      'Control weeds during early growth stages',
    ],
    audioFiles: {
      en: '/assets/audio/rice-en.mp3',
      ta: '/assets/audio/rice-ta.mp3',
      ml: '/assets/audio/rice-ml.mp3',
      te: '/assets/audio/rice-te.mp3',
    },
  },
  {
    id: 'corn',
    name: 'Corn',
    shortDesc: 'Versatile crop for food and feed',
    description:
      'Corn (maize) is a versatile crop used for human consumption, animal feed, and industrial products. It requires warm weather and adequate moisture, especially during pollination and grain filling.',
    image: '/assets/generated/corn-field.dim_400x300.jpg',
    season: 'Summer',
    difficulty: 'Easy',
    waterNeeds: 'Moderate',
    sunlight: 'Full Sun',
    soilTypes: ['Loamy', 'Sandy'],
    tips: [
      'Plant when soil temperature reaches 60°F',
      'Space plants 8-12 inches apart in rows',
      'Side-dress with nitrogen at knee-high stage',
      'Ensure consistent moisture during tasseling',
    ],
    audioFiles: {
      en: '/assets/audio/corn-en.mp3',
      ta: '/assets/audio/corn-ta.mp3',
      ml: '/assets/audio/corn-ml.mp3',
      te: '/assets/audio/corn-te.mp3',
    },
  },
  {
    id: 'tomato',
    name: 'Tomato',
    shortDesc: 'Popular vegetable for fresh and processed use',
    description:
      'Tomatoes are one of the most popular vegetables worldwide, used fresh in salads or processed into sauces and pastes. They require warm temperatures and consistent care for optimal production.',
    image: '/assets/generated/tomato-plants.dim_400x300.jpg',
    season: 'Summer',
    difficulty: 'Moderate',
    waterNeeds: 'Moderate',
    sunlight: 'Full Sun',
    soilTypes: ['Loamy', 'Sandy'],
    tips: [
      'Transplant seedlings after last frost date',
      'Provide support with stakes or cages',
      'Water deeply and consistently to prevent cracking',
      'Remove suckers for better fruit production',
    ],
    audioFiles: {
      en: '/assets/audio/tomato-en.mp3',
      ta: '/assets/audio/tomato-ta.mp3',
      ml: '/assets/audio/tomato-ml.mp3',
      te: '/assets/audio/tomato-te.mp3',
    },
  },
  {
    id: 'potato',
    name: 'Potato',
    shortDesc: 'Underground tuber crop rich in carbohydrates',
    description:
      'Potatoes are a major food crop grown for their starchy tubers. They prefer cool weather and well-drained soil. Proper hilling and disease management are essential for good yields.',
    image: '/assets/generated/potato-plants.dim_400x300.jpg',
    season: 'Spring',
    difficulty: 'Easy',
    waterNeeds: 'Moderate',
    sunlight: 'Full Sun',
    soilTypes: ['Loamy', 'Sandy'],
    tips: [
      'Plant seed potatoes 4 inches deep',
      'Hill soil around plants as they grow',
      'Maintain consistent soil moisture',
      'Harvest when foliage dies back naturally',
    ],
    audioFiles: {
      en: '/assets/audio/potato-en.mp3',
      ta: '/assets/audio/potato-ta.mp3',
      ml: '/assets/audio/potato-ml.mp3',
      te: '/assets/audio/potato-te.mp3',
    },
  },
  {
    id: 'farming-tech',
    name: 'Modern Farming',
    shortDesc: 'Advanced techniques for better yields',
    description:
      'Modern farming incorporates technology and sustainable practices to improve crop yields while minimizing environmental impact. This includes precision agriculture, efficient irrigation, and integrated pest management.',
    image: '/assets/generated/tractor-farming.dim_400x300.jpg',
    season: 'All Year',
    difficulty: 'Advanced',
    waterNeeds: 'Variable',
    sunlight: 'Variable',
    soilTypes: ['All Types'],
    tips: [
      'Use GPS-guided equipment for precision planting',
      'Implement drip irrigation for water efficiency',
      'Practice crop rotation to maintain soil health',
      'Monitor soil nutrients with regular testing',
    ],
    audioFiles: {
      en: '/assets/audio/farming-tech-en.mp3',
      ta: '/assets/audio/farming-tech-ta.mp3',
      ml: '/assets/audio/farming-tech-ml.mp3',
      te: '/assets/audio/farming-tech-te.mp3',
    },
  },
];

export const soilData = [
  {
    id: 'loamy',
    name: 'Loamy Soil',
    description:
      'Ideal soil type with balanced sand, silt, and clay. Excellent drainage and nutrient retention make it perfect for most crops.',
    image: '/assets/generated/loamy-soil.dim_300x300.jpg',
    color: '#8B4513',
    bestFor: ['Wheat', 'Corn', 'Tomato', 'Potato'],
    characteristics: [
      'Good drainage and moisture retention',
      'Rich in nutrients and organic matter',
      'Easy to work with',
      'pH typically 6.0-7.0',
    ],
  },
  {
    id: 'clay',
    name: 'Clay Soil',
    description:
      'Heavy soil with fine particles that retain water and nutrients well. Requires proper management to prevent waterlogging.',
    image: '/assets/generated/clay-soil.dim_300x300.jpg',
    color: '#A0522D',
    bestFor: ['Rice', 'Wheat', 'Cabbage'],
    characteristics: [
      'High water retention capacity',
      'Rich in nutrients',
      'Poor drainage when wet',
      'Becomes hard when dry',
    ],
  },
  {
    id: 'sandy',
    name: 'Sandy Soil',
    description:
      'Light soil with large particles that drains quickly. Requires frequent irrigation and fertilization but warms up quickly in spring.',
    image: '/assets/generated/sandy-soil.dim_300x300.jpg',
    color: '#DEB887',
    bestFor: ['Potato', 'Carrot', 'Radish', 'Corn'],
    characteristics: [
      'Excellent drainage',
      'Low nutrient retention',
      'Easy to cultivate',
      'Warms up quickly in spring',
    ],
  },
];

export const fertilizerData = [
  {
    id: 'npk-balanced',
    name: 'Balanced NPK',
    type: 'Complete Fertilizer',
    npkRatio: '10-10-10',
    description:
      'All-purpose fertilizer with equal parts nitrogen, phosphorus, and potassium. Suitable for general crop nutrition and soil maintenance.',
    suitableFor: ['Vegetables', 'Grains', 'Fruits'],
    application: 'Apply 2-3 weeks before planting and side-dress during growth',
  },
  {
    id: 'nitrogen-rich',
    name: 'Nitrogen Booster',
    type: 'Nitrogen Fertilizer',
    npkRatio: '20-5-5',
    description:
      'High nitrogen content promotes vigorous vegetative growth and deep green foliage. Essential for leafy crops and grain production.',
    suitableFor: ['Wheat', 'Corn', 'Leafy Greens'],
    application: 'Apply during active growth phase, avoid during flowering',
  },
  {
    id: 'phosphorus-rich',
    name: 'Root Developer',
    type: 'Phosphorus Fertilizer',
    npkRatio: '5-20-5',
    description:
      'High phosphorus content supports strong root development and flower/fruit formation. Critical during early growth stages.',
    suitableFor: ['Root Crops', 'Tomato', 'Flowering Plants'],
    application: 'Apply at planting time and during flowering stage',
  },
  {
    id: 'organic-compost',
    name: 'Organic Compost',
    type: 'Organic Matter',
    npkRatio: '2-2-2',
    description:
      'Natural fertilizer made from decomposed organic materials. Improves soil structure, water retention, and provides slow-release nutrients.',
    suitableFor: ['All Crops', 'Soil Amendment'],
    application: 'Mix into soil before planting or use as mulch',
  },
];

export const languageData = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
  },
  {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    flagImage: '/assets/generated/tamil-flag.dim_64x64.png',
  },
  {
    code: 'ml',
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    flagImage: '/assets/generated/malayalam-flag.dim_64x64.png',
  },
  {
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    flagImage: '/assets/generated/telugu-flag.dim_64x64.png',
  },
];

export const assistantAudioFiles = {
  en: '/assets/audio/assistant-response-en.mp3',
  hi: '/assets/audio/assistant-response-hi.mp3',
  ta: '/assets/audio/assistant-response-ta.mp3',
  ml: '/assets/audio/assistant-response-ml.mp3',
  te: '/assets/audio/assistant-response-te.mp3',
};
