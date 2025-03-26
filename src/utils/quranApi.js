// src/utils/quranApi.js
import axios from 'axios';

export async function getVerse(verseKey, translationId = 131) {
  try {
    const res = await axios.get(
      `https://api.quran.com/v4/verses/by_key/${verseKey}`,
      {
        params: {
          language: 'en',
          fields: 'text_uthmani',
          translations: translationId
        }
      }
    );

    const verse = res.data.verse;
    return {
      arabic: verse.text_uthmani,
      translation: verse.translations[0]?.text,
      reference: verse.verse_key
    };
  } catch (error) {
    console.error("Error fetching Qur’an verse:", error);
    return null;
  }
}