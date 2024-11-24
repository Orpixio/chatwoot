export const useInstallationName = (str, installationName) => {
  if (str && installationName) {
    return str.replace(/ORPIX.IO/g, installationName);
  }
  return str;
};

export default {
  methods: {
    useInstallationName,
  },
};
