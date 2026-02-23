import { StyleSheet, Text, TouchableOpacity, View, ViewStyle, Modal, FlatList } from 'react-native'
import React from 'react'
import { theme } from './theme';

type DropdownItem = {
  label: string;
  value: any;
};

type DropdownProps = {
  placeholder?: string;
  items: DropdownItem[];
  selectedValue?: any;
  onValueChange?: (value: any) => void;
  containerStyle?: ViewStyle;
  error?: string;
};

export default function DropDown({
  placeholder = 'Select an option',
  items,
  selectedValue,
  onValueChange,
  containerStyle,
  error,
}: DropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const selectedLabel = items.find(item => item.value === selectedValue)?.label || placeholder;

  const handleSelect = (value: any, label: string) => {
    onValueChange?.(value);
    setIsOpen(false);
  };

  return (
    <>
      <TouchableOpacity
        style={[
          styles.dropdownContainer,
          { borderColor: isFocused ? theme.colors.primary : theme.colors.gray },
          containerStyle,
        ]}
        onPress={() => {
          setIsOpen(!isOpen);
          setIsFocused(!isFocused);
        }}
      >
        <Text
          style={[
            styles.dropdownText,
            !selectedValue && { color: theme.colors.gray },
          ]}
        >
          {selectedLabel}
        </Text>
        <Text style={styles.arrowIcon}>▼</Text>
      </TouchableOpacity>

      <Modal visible={isOpen} transparent animationType="none">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => {
            setIsOpen(false);
            setIsFocused(false);
          }}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={items}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.optionItem,
                    selectedValue === item.value && styles.selectedOption,
                  ]}
                  onPress={() => handleSelect(item.value, item.label)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedValue === item.value && styles.selectedText,
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 8,
    height: 60,
    width: 340,
    marginVertical: 15,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  dropdownText: {
    fontSize: 14,
    color: '#000',
    flex: 1,
  },
  arrowIcon: {
    fontSize: 10,
    color: theme.colors.primary,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-start',
    paddingTop: 100,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 20,
    maxHeight: 300,
    borderWidth: 1,
    borderColor: theme.colors.gray,
  },
  optionItem: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  selectedOption: {
    backgroundColor: theme.colors.primary + '10',
  },
  optionText: {
    fontSize: 14,
    color: '#000',
  },
  selectedText: {
    color: theme.colors.primary,
    fontWeight: '600',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});
