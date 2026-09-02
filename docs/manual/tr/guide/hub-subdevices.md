# Alt cihazlar

Seçili Hub’dan **Alt cihazlar**ı açın. Örnekler örnek cihaz ve odaları gösterir. Cihaz silmeden, düzenlemeden veya eklemeden önce hedefi doğrulayın.

![Alt cihaz listesi: 1 tür, 2 model, 3 durum, 4 seri arama, 5 ayrıntı, 6 düzenle, 7 sil](/images/hubs/hub-subdevices-list.png){.manual-shot}

| No. | Denetim | Ön koşul ve işlem | Sonuç, hata, izin veya risk |
|---|---|---|---|
| 1 | Tür filtresi | Mevcut cihaz türünü seçin. | Listeyi o türle yeniler; filtre seçenekleri yüklenirken devre dışıdır. |
| 2 | Model filtresi | Mevcut model seçin. | Listeyi daraltır; geçersiz seçenekler filtre yenilemesinden sonra sıfırlanır. |
| 3 | Durum filtresi | Çevrim içi, Çevrim dışı, Devre Dışı veya tümünü seçin. | Yalnızca kayıtları yeniler; cihaz durumunu değiştirmez. |
| 4 | Seri arama | Anahtar sözcük veya seri parçası girin. | Listeyi yeniler. Liste/seçenek hatasında bağlantıyı denetledikten sonra görünür Yeniden dene denetimini kullanın. |
| 5 | Ayrıntı | Seçili satırı açın. | Salt okunur kimlik, üretici yazılımı, pil ve sinyal alanlarını gösterir. |
| 6 | Düzenle | Seçili satırın ad ve oda formunu açın. | Mevcut seçili Hub ve izinli güncelleme erişimi gerekir. |
| 7 | Sil | Seçili satır için silme onayını açın. | Yüksek risklidir; onay başarılı olmadan silme olmaz. |

![Alt cihaz ayrıntısı: 1 Cihazı sil, 2 Alt cihazlara dön](/images/hubs/hub-subdevice-detail.png){.manual-shot}

| No. | Denetim | İşlem ve sonuç |
|---|---|---|
| 1 | Cihazı sil | Bu cihaz için onay açar. Yetkili kullanıcı Onayla’yı göndermeden silmez. |
| 2 | Alt cihazlara dön | Cihazı değiştirmeden listeye döner. |

![Mevcut alt cihazı düzenle: 1 ad, 2 oda, 3 yeni oda, 4 İptal, 5 Onayla](/images/hubs/hub-subdevice-edit-room.png){.manual-shot}

| No. | Denetim | Ön koşul ve işlem | Sonuç veya hata |
|---|---|---|---|
| 1 | Cihaz adı | Amaçlanan görünen adı girin. | Boş ad kaydetmede mevcut ada geri döner. |
| 2 | Oda | Mevcut Hub odasını seçin. | Oda değişikliği yalnızca Onayla’dan sonra uygulanır. |
| 3 | Ya da yeni oda girin | Mevcut oda seçmek yerine yeni oda adı girin. | Onayla önce odayı oluşturur, sonra cihazı günceller; hata formu yeniden deneme için açık bırakır. |
| 4 | İptal | Formu kapatın. | Yerel düzenlemeleri atar, istek göndermez. |
| 5 | Onayla | Adı ve seçili/yeni odayı kaydedin. | İzin gerekir; hata formu açık bırakır ve cihaz verisini değiştirmez. |

![Alt cihaz silme onayı: 1 uyarı, 2 İptal, 3 Onayla](/images/hubs/hub-subdevice-delete-confirm.png){.manual-shot}

| No. | Denetim | İşlem ve risk |
|---|---|---|
| 1 | Uyarı | Devamdan önce cihaz adı ve SN’yi doğrulayın. |
| 2 | İptal | Silmeden iletişim kutusunu kapatır. |
| 3 | Onayla | Başarılı yetkili istekten sonra seçili alt cihazı bu Hub’dan kalıcı olarak kaldırır. |

## Alt cihaz ekle

![Devre dışı kayıt girişi: 1 adım, 2 LED’i onayla, 3 kayıttan çık](/images/hubs/hub-add-subdevice-allowed.png){.manual-shot}

| No. | Denetim | Ön koşul ve işlem | Sonuç, hata veya risk |
|---|---|---|---|
| 1 | Kayıt adımı | Kaydı etkinleştirmeden Hub durumunu denetleyin. | Kayıt yalnızca Hub açıkça **devre dışı** iken başlayabilir. |
| 2 | Onaylandı - LED yeşil yanıp sönüyor | Hub LED’ini onaylayın, ardından cihaz kaydı yönergelerine devam edin. | Yalnızca cihaz hazır adımına geçer; cihaz eklemez. |
| 3 | Kayıt modundan çık | Etkin kayıt sürecinden çıkın. | Tamamlanınca listeye döner. |

![Kayıt taraması: 1 tarama ilerlemesi, 2 Düzenle, 3 İleri](/images/hubs/hub-add-subdevice-scan.png){.manual-shot}

| No. | Denetim | Ön koşul ve işlem | Sonuç, hata veya risk |
|---|---|---|---|
| 1 | Tarama ilerlemesi | Fiziksel cihazı kayıt moduna alın, sonra **İleri - cihaz hazır** seçin. | Sayfa tarama sırasında cihaz aramayı sürdürür. Sonuç yoksa bekler; tarama hatası akıştan yeniden denenebilen bekleme durumunu korur. |
| 2 | Düzenle | Bulunan cihazın ad ve oda formunu açın. | Yukarıdaki ad, oda, yeni oda, İptal ve Onayla davranışını kullanır. |
| 3 | İleri - kaydı tamamla | Bulunan cihazları inceleyip devam edin. | Son onay durumunu açar; henüz cihaz eklenmemiştir. |

![Bulunan alt cihazı düzenle: 1 ad, 2 oda, 3 yeni oda, 4 İptal, 5 Onayla](/images/hubs/hub-add-subdevice-edit.png){.manual-shot}

| No. | Denetim | İşlem ve sonuç |
|---|---|---|
| 1 | Cihaz adı | Tamamlamadan önce bulunan cihazın görünen adını değiştirin. |
| 2 | Oda | Bulunan cihaz için mevcut oda seçin. |
| 3 | Ya da yeni oda girin | Oda adı girin; onay, cihazı güncellemeden önce odayı oluşturur. |
| 4 | İptal | Bulunan cihaz bilgisini değiştirmez. |
| 5 | Onayla | Bulunan cihazı günceller; hata formu yeniden deneme için açık bırakır. |

![Onaya hazır: 1 Tamamla](/images/hubs/hub-add-subdevice-confirm.png){.manual-shot}

| No. | Denetim | İşlem ve sonuç |
|---|---|---|
| 1 | Tamamla | Kayıttan çıkar ve alt cihaz listesini yeniler. Yalnızca tüm adımlar bitince başarılıdır; meşgulken iki kez kullanmayın. |

![Kurulu Hub engellendi: 1 Hub listesi, 2 Hub ayrıntısı, 3 Alt cihaz ekle](/images/hubs/hub-add-subdevice-armed-blocked.png){.manual-shot}

| No. | Denetim veya durum | İşlem ve güvenlik kısıtlaması |
|---|---|---|
| 1 | Hub listesi | Kayıt komutu başlatmadan başka Hub’a dönün. |
| 2 | Hub ayrıntısı | Yeniden denemeden önce hedef Hub durumunu inceleyin. |
| 3 | Alt cihaz ekle | Kurulu, bilinmeyen veya okunamayan Hub durumları engellenir. Doğru Hub’ı devre dışı bırakın ve durumunu doğrulayın; bu kısıtlamayı asla aşmayın. |
