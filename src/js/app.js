export default function specialAttackList(character) {
  const specialList = character.special;
  const result = [];
  specialList.forEach((element) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;
    result.push({
      id, name, icon, description,
    });
  });
  return result;
}
