import React, { memo, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";

type Variant = {
  label: string; // e.g. "Variations :"
  options: string[]; // e.g. ["Black", "Red"]
};

type Props = {
  image: ImageSourcePropType | { uri: string };
  title: string;
  description?: string;

  rating?: number; // e.g. 4.8
  ratingCount?: number; // optional
  variants?: Variant;

  price: number; // current price (required)
  oldPrice?: number; // crossed price
  discountText?: string; // e.g. "upto 33% off"

  currencySymbol?: string; // default "$"

  quantity?: number; // for "Total Order (1)"
  totalLabel?: string; // default "Total Order"
  totalAmount?: number; // if not provided -> price * quantity

  onPress?: () => void;
  onPressImage?: () => void;
};

function Stars({ value = 0 }: { value?: number }) {
  const stars = useMemo(() => {
    const full = Math.floor(value);
    const arr = Array.from({ length: 5 }).map((_, i) => i < full);
    return arr;
  }, [value]);

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {stars.map((isFull, i) => (
        <Text key={i} style={[styles.star, { opacity: isFull ? 1 : 0.25 }]}>
          ★
        </Text>
      ))}
    </View>
  );
}

function OrderProductCard({
  image,
  title,
  description,

  rating,
  ratingCount,
  variants,

  price,
  oldPrice,
  discountText,

  currencySymbol = "$",

  quantity = 1,
  totalLabel = "Total Order",
  totalAmount,

  onPress,
  onPressImage,
}: Props) {
  const computedTotal = totalAmount ?? price * quantity;

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.card}>
      {/* Top Row */}
      <View style={styles.topRow}>
        {/* Image */}
        <TouchableOpacity activeOpacity={0.9} onPress={onPressImage}>
          <Image source={image} style={styles.image} />
        </TouchableOpacity>

        {/* Info */}
        <View style={styles.info}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>

          {!!description && (
            <Text numberOfLines={2} style={styles.desc}>
              {description}
            </Text>
          )}

          {/* Variants */}
          {variants?.options?.length ? (
            <View style={styles.variantsRow}>
              <Text style={styles.variantsLabel}>{variants.label}</Text>
              <View style={styles.variantChips}>
                {variants.options.map((opt) => (
                  <View key={opt} style={styles.chip}>
                    <Text style={styles.chipText}>{opt}</Text>
                  </View>
                ))}
              </View>
            </View>
          ) : null}

          {/* Rating */}
          {typeof rating === "number" ? (
            <View style={styles.ratingRow}>
              <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
              <Stars value={rating} />
              {typeof ratingCount === "number" ? (
                <Text style={styles.ratingCount}>({ratingCount})</Text>
              ) : null}
            </View>
          ) : null}

          {/* Price Row */}
          <View style={styles.priceRow}>
            <View style={styles.priceBox}>
              <Text style={styles.priceText}>
                {currencySymbol} {price.toFixed(2)}
              </Text>
            </View>

            <View style={styles.offBox}>
              {!!discountText && <Text style={styles.offText}>{discountText}</Text>}
              {typeof oldPrice === "number" ? (
                <Text style={styles.oldPrice}>
                  {currencySymbol} {oldPrice.toFixed(2)}
                </Text>
              ) : null}
            </View>
          </View>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Bottom Total */}
      <View style={styles.bottomRow}>
        <Text style={styles.totalLeft}>
          {totalLabel} ({quantity}) :
        </Text>
        <Text style={styles.totalRight}>
          {currencySymbol} {computedTotal.toFixed(2)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default memo(OrderProductCard);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 10,
    // shadow
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },

  topRow: {
    flexDirection: "row",
    gap: 12,
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 12,
    backgroundColor: "#eee",
  },

  info: {
    flex: 1,
    justifyContent: "flex-start",
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },

  desc: {
    marginTop: 3,
    fontSize: 12.5,
    color: "#666",
  },

  variantsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    flexWrap: "wrap",
  },
  variantsLabel: {
    fontSize: 12.5,
    color: "#333",
    marginRight: 8,
  },
  variantChips: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
  },
  chip: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  chipText: {
    fontSize: 12,
    color: "#111",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    gap: 6,
  },
  ratingText: {
    fontSize: 12.5,
    color: "#111",
    fontWeight: "600",
  },
  star: {
    fontSize: 14,
  },
  ratingCount: {
    fontSize: 12,
    color: "#666",
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 10,
  },
  priceBox: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 8,
    paddingHorizontal: 12,
    width:100,
    paddingVertical: 8,
    backgroundColor: "#fff",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#111",
  },

  offBox: {
    flex: 1,
    justifyContent: "center",
  },
  offText: {
    fontSize: 11.5,
    color: "#e53935",
    fontWeight: "600",
  },
  oldPrice: {
    marginTop: 2,
    fontSize: 12.5,
    color: "#999",
    textDecorationLine: "line-through",
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginTop: 12,
    marginBottom: 10,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLeft: {
    fontSize: 13,
    color: "#111",
    fontWeight: "500",
  },
  totalRight: {
    fontSize: 14,
    color: "#111",
    fontWeight: "800",
  },
});
