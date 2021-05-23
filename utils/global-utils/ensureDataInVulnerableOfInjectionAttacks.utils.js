exports.ensureDataInVulnerableOfInjectionAttacks = (incomingRequestBodyObj) => {
  const incomingObjKeysList = Object.keys(incomingRequestBodyObj);
  const incomingObjValuesList = Object.values(incomingRequestBodyObj);

  const parsedValuesToStringToPreventInjectionAttacks = incomingObjValuesList.map(
    (objKey) => objKey.toString()
  );

  const reassembledData = Object.assign(
    ...incomingObjKeysList.map((objKeyItem, index) => ({
      [objKeyItem]: parsedValuesToStringToPreventInjectionAttacks[index],
    }))
  );

  return reassembledData;
};
