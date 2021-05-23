exports.ensureDataInVulnerableOfInjectionAttacks = (incomingRequestBodyObj) => {
  const incomingObjKeysList = Object.keys(incomingRequestBodyObj);
  const incomingObjValuesList = Object.values(incomingRequestBodyObj);

  const parsedValuesToStringToPreventInjectionAttacks = incomingObjValuesList.map(
    (objKey) => objKey.toString()
  );

  return Object.assign(
    ...incomingObjKeysList.map((objKeyItem, index) => ({
      [objKeyItem]: parsedValuesToStringToPreventInjectionAttacks[index],
    }))
  );
};
