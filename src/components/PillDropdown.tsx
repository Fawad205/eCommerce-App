import React, { useMemo, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  ViewStyle,
} from "react-native";
import { theme } from "./theme";
import SvgIcon from "../../eCommerce-App/src/assets/svgs/SvgIcon";
import { Xmls } from "../assets/icons/Xmls";

type Option = { label: string; value: string | number };

type PillDropdownProps = {
  label: string;
  value: Option["value"];
  options: Option[];
  onChange: (value: Option["value"]) => void;
  style?: ViewStyle;
};

export function PillDropdown({ label, value, options, onChange, style }: PillDropdownProps) {
  const [open, setOpen] = useState(false);

  const selectedLabel = useMemo(() => {
    return options.find(o => o.value === value)?.label ?? String(value);
  }, [options, value]);

  return (
    <>
      <Pressable
        onPress={() => setOpen(true)}
        style={({ pressed }) => [
          styles.pill,
          pressed && { opacity: 0.85 },
          style,
        ]}
      >
        <Text style={styles.pillLabel}>{label}</Text>
        <Text style={styles.pillValue}>{selectedLabel}</Text>
        <Text style={styles.chevron}><SvgIcon xml={Xmls.arrowdown} height={12.51} width={11.58}/></Text>
      </Pressable>

      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        {/* Backdrop */}
        <Pressable style={styles.backdrop} onPress={() => setOpen(false)} />

        {/* Sheet */}
        <View style={styles.sheet}>
          <Text style={styles.sheetTitle}>{label}</Text>

          <FlatList
            data={options}
            keyExtractor={(item) => String(item.value)}
            ItemSeparatorComponent={() => <View style={styles.sep} />}
            renderItem={({ item }) => {
              const active = item.value === value;
              return (
                <Pressable
                  onPress={() => {
                    onChange(item.value);
                    setOpen(false);
                  }}
                  style={({ pressed }) => [
                    styles.row,
                    pressed && { opacity: 0.75 },
                  ]}
                >
                  <Text style={[styles.rowText, active && styles.rowTextActive]}>
                    {item.label}
                  </Text>
                  {active ? <Text style={styles.check}>✓</Text> : null}
                </Pressable>
              );
            }}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: "row",
    marginVertical:8,
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 4,
    backgroundColor: '#CACACA',
    gap: 12,
    width:'auto'
  },
  pillLabel: {
    fontFamily:theme.fonts.regular,
    fontSize: 16,
    color: theme.colors.secondry,
  },
  pillValue: {
    fontFamily:theme.fonts.regular,
    fontSize: 16,
    color: "#111827",
    fontWeight: "500",
  },
  chevron: {
    color:theme.colors.secondry,
    position:'static'
    

  },

  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  sheet: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 16,
    maxHeight: "55%",
    borderRadius: 16,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingVertical: 12,
    paddingHorizontal: 12,
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOpacity: 0.15, shadowRadius: 12, shadowOffset: { width: 0, height: 6 } },
      android: { elevation: 8 },
    }),
  },
  sheetTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
    color: "#111827",
  },
  row: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowText: {
    fontSize: 15,
    color: "#111827",
  },
  rowTextActive: {
    fontWeight: "700",
  },
  check: {
    fontSize: 16,
    color: "#111827",
  },
  sep: {
    height: 1,
    backgroundColor: "#F3F4F6",
  },
});