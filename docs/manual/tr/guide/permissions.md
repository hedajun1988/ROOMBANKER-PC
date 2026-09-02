# İzinler

Bu sayfa rol üyeliğini ve izin ağacını gösterir. Uygulama erişimi 11 modülde düzenler. Ağacı yalnızca Platform Süper Yöneticisi değiştirebilir; diğer roller inceleyebilir ancak salt okunur görünüm alır.

![İzin rol listesi: 1 üyeler, 2 rol izinlerini yapılandır](/images/permissions/permission-role-list.png){.manual-shot}

| No. | Denetim | Ön koşul ve işlem | Sonuç, hata, izin veya risk |
|---|---|---|---|
| 1 | Üyeler | Bir rolün üye sayısını seçin. | Görüntüleyenin hesap kapsamına bağlı olarak o rolle filtrelenmiş Hesapları açar. |
| 2 | Rol izinlerini yapılandır | Süper Yönetici olmayan rolün yapılandırma işlemini seçin. | Rolün izin ağacını açar. Platform Süper Yöneticisi düzenleyebilir; diğer roller salt okunur görür. |

![İzin ağacı: 1 modülü genişlet, 2 üst izin, 3 alt izin, 4 kaydet, 5 iptal](/images/permissions/permission-tree-edit.png){.manual-shot}

| No. | Denetim | Ön koşul ve işlem | Sonuç, hata, izin veya risk |
|---|---|---|---|
| 1 | Modülü genişlet | Alt izinleri gösterip gizlemek için modül başlığını seçin. | Yalnızca gösterilen ağaç dalını değiştirir. |
| 2 | Üst izin | Platform Süper Yöneticisi modül düzeyi kutuyu seçer veya temizler. | Modüldeki her alt izni seçer veya temizler. Diğer roller değiştiremez. |
| 3 | Alt izin | Tek bir alt izin kutusunu seçin veya temizleyin. | Üst kutu tam veya kısmi seçimi yansıtır. |
| 4 | Kaydet | Değişen ağacı gözden geçirip Kaydet’i seçin. | Başarılı kaydetmeden sonra değişiklikler etkili olur. Hata düzenleyiciyi açık bırakır; erişim değişiklikleri yüksek risklidir. |
| 5 | İptal | İptal’i seçin. | Rol listesine döner ve kaydedilmemiş yerel değişiklikleri atar. |

Sayfa adresini doğrudan yazmak izinleri aşamaz. Eksik menü veya başka sayfaya dönüş, mevcut rolün erişimi olmadığını gösterir.
